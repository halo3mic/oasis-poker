// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "node_modules/@oasisprotocol/sapphire-contracts/contracts/Sapphire.sol"; // todo: replace with relative path
import "./Cards.sol";


uint8 constant NCARDS = 52;

struct Deck {
    bytes indices;
}

library DeckUtils {
    
    function create() internal view returns (Deck memory) {
        bytes memory seed = Sapphire.randomBytes(NCARDS, "");
        return Deck(seedIntoCardIndices(seed));
    }

    function seedIntoCardIndices(bytes memory randomBytes) internal pure returns (bytes memory) {
        require(randomBytes.length == NCARDS, "Invalid random bytes length");
        bytes memory indices = new bytes(NCARDS);
        uint bloomFilter;
        for (uint i=0; i<randomBytes.length; ++i) {
            uint cardIdx = uint8(randomBytes[i]) % NCARDS;
            while (true) {
                bool isInDeck = (bloomFilter & (uint(1) << cardIdx)) > 0;
                if (isInDeck) {
                    cardIdx = (cardIdx + 1) % NCARDS;
                } else {
                    bloomFilter |= uint(1) << cardIdx;
                    break;
                }
            }
            indices[i] = bytes1(uint8(cardIdx));
        }
        return indices;
    }

    function pop(Deck memory deck) internal returns (Card memory) {
        // TODO: Restrict
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
