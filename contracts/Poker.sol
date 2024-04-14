// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Game.sol";
import "./Cards.sol";

import {console2} from "lib/forge-std/src/Test.sol";

// todo: add events
// todo: add money handling
// todo: add game

contract Poker {
    using GameUtils for Game;
    using DeckUtils for Deck;
    using CardUtils for Card;

    uint nextGameId = 0;
    Game[] private games; // todo: make private

    function createGame() external returns (uint) {
        games.push().shuffle();
        return gamesCount() - 1;
    }

    function gamesCount() public view returns (uint) {
        return games.length;
    }

    function buyIn(uint gameId) external payable {
        games[gameId].deal(msg.sender, msg.value);
    }

    function peek(uint gameId) external view returns (string memory, string memory) {
        return games[gameId].peekCards(msg.sender);
    }

    function play(uint gameId, PlayerAction action) external {
        games[gameId].play(msg.sender, action);
    }

    function getCommunityCards(uint gameId) external view returns (string memory cardsStr) {
        Card[] memory cards = games[gameId].communityCards;
        for (uint i = 0; i < cards.length; i++) {
            cardsStr = string(abi.encodePacked(cardsStr, "; ", cards[i].toString()));
        }

    }

}