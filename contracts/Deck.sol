pragma solidity ^0.8.9;

import "./Constants.sol";
import "./Cards.sol";


struct Deck {
    bytes indices;
}

library DeckUtils {
    
    function create() internal view returns (Deck memory) {
        // bytes memory seed = Sapphire.randomBytes(NCARDS, "");
        bytes memory seed = new bytes(NCARDS);
        for (uint i=0; i<NCARDS; ++i) {
            seed[i] = bytes1(uint8(i));
        }
        return Deck(seedIntoCardIndices(seed));
    }

    function seedIntoCardIndices(bytes memory randomBytes) internal pure returns (bytes memory) {
        require(randomBytes.length == NCARDS, "Invalid random bytes length");
        bytes memory indices = new bytes(NCARDS);
        bytes6 bloomFilter;
        for (uint i=0; i<randomBytes.length; ++i) {
            uint8 cardIdx = uint8(randomBytes[i]);
            while (true) {
                bool isInDeck = (bloomFilter & (ONE_B6 << cardIdx)) != 0;
                if (isInDeck) {
                    cardIdx = (cardIdx + 1) % NCARDS;
                } else {
                    bloomFilter |= ONE_B6 << cardIdx;
                    break;
                }
            }
            indices[i] = bytes1(cardIdx);
        }
        return indices;
    }

    function pop(Deck storage deck) internal returns (Card memory) {
        require(deck.indices.length > 0, "Deck is empty");
        bytes memory indices = deck.indices;
        bytes1 cardIdx = indices[indices.length - 1];
        assembly {
            mstore(indices, sub(mload(indices), 1))
        }
        deck.indices = indices;
        return CardUtils.create(uint8(cardIdx));
    }

}
