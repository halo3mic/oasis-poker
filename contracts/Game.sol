// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Deck.sol";


enum GameStatus {
    Pending,
    Open,
    Closed
}

struct PlayerHand {
    Card card0;
    Card card1;
}

// FIX: UnimplementedFeatureError: Copying of type struct PlayerHand memory[] memory to storage not yet supported.
struct Game {
    Deck deck;
    address[] players;
    // PlayerHand[] playerHands;
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
            // playerHands: new PlayerHand[](0),
            status: GameStatus.Pending
        });
    }

    function join(Game storage game, address player) internal onlyPending(game) {
        // TODO: Require stake
        // Card memory card0 = game.deck.pop();
        // Card memory card1 = game.deck.pop();
        // PlayerHand memory hand = new PlayerHand({card0: card0, card1: card1});
        game.players.push(player);
        // game.playerHands.push(hand);
    }

    function start(Game storage game) public {
        game.status = GameStatus.Open;
    }
}
