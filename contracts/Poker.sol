// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Game.sol";
import "./Cards.sol";

// todo: add events
// todo: add money handling
// todo: add game

contract Poker {
    using GameUtils for Game;
    using DeckUtils for Deck;

    uint lastGameId = 0;
    mapping(uint => Game) public gameToDeck; // todo: make private

    function createGame() external {
        gameToDeck[lastGameId++] = GameUtils.create();
    }

    function joinGame(uint gameId) external {
        gameToDeck[gameId].join(msg.sender);
    }

    function startGame(uint gameId) external {
        // TODO: Restrict
        gameToDeck[gameId].start();
    }

    // function getOwnHand(uint gameId, uint playerIndex) external {
        // TODO: Restrict
        // return gameToDeck[gameId].playerHands[playerIndex];
    // }

    function viewHand(uint gameId) view external returns (string memory, string memory) {
        return gameToDeck[gameId].viewHand();
    }

}