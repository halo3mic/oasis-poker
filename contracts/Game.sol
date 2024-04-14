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
    // PlayerHand exampleHand;
    PlayerHand exampleHand;
    GameStatus status;
}


library GameUtils {
    using DeckUtils for Deck;
    using CardUtils for Card;

    modifier onlyPending(Game storage game) {
        require(game.status == GameStatus.Pending, "Game is not pending");
        _;
    }

    function create() internal returns (Game memory) {
        Deck memory deck = DeckUtils.create();

        // example:
        Card memory card0 = deck.pop();
        Card memory card1 = deck.pop();

        return Game({
            deck: deck,
            players: new address[](0),
            // playerHands: new PlayerHand[](0),
            exampleHand: PlayerHand({card0: card0, card1: card1}),
            status: GameStatus.Pending
        });
    }

    function join(Game storage game, address player) internal onlyPending(game)  {
        // TODO: Require stake
        // Card memory card0 = game.deck.pop();
        // Card memory card1 = game.deck.pop();
        // PlayerHand memory hand = new PlayerHand({card0: card0, card1: card1});
        game.players.push(player);
        // game.playerHands.push(hand);
    }

    function start(Game storage game) internal {
        game.status = GameStatus.Open;
    }

    function viewHand(Game storage game) view internal returns (string memory, string memory) {
        return (game.exampleHand.card0.toString(), game.exampleHand.card1.toString());
    }
}
