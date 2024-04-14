// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Deck.sol";


enum GameStatus {
    Pending,
    Open,
    Closed
}

struct Game {
    Deck deck;
    address[] players;
    GameStatus status;
}


library GameUtils {

    modifier onlyPending(Game storage game) {
        require(game.status == GameStatus.Pending, "Game is not pending");
        _;
    }

    function create() internal view returns (Game memory) {
        return Game({
            deck: DeckUtils.create(),
            players: new address[](0),
            status: GameStatus.Pending
        });
    }

    function join(Game storage game, address player) internal onlyPending(game) {
        game.players.push(player);
    }

    function start(Game storage game) {
        game.status = GameStatus.Open;
    }
}
