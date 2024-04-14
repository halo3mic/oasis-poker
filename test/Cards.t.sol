// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {Test, console2} from "lib/forge-std/src/Test.sol";
import "../contracts/Cards.sol";


contract CardsTest is Test {
    using CardUtils for Card;

    function testIndex13() public {
        Card memory card = CardUtils.create(13);
        assert(uint(card.rank) == uint(Rank.Two));
        assert(uint(card.suit) == uint(Suit.Diamonds));
        assert(keccak256(bytes(card.toString())) == keccak256(bytes("Two of Diamonds")));
    }

    function testIndex51() public {
        Card memory card = CardUtils.create(51);
        assert(uint(card.rank) == uint(Rank.Ace));
        assert(uint(card.suit) == uint(Suit.Spades));
        assert(keccak256(bytes(card.toString())) == keccak256(bytes("Ace of Spades")));
    }

}
