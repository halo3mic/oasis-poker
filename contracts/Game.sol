// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Deck.sol";
import "./Cards.sol";

import {console2} from "lib/forge-std/src/Test.sol"; 


struct PlayerGameState {
    uint bet;
    Hand hand;
    uint balance;
}

enum PlayerAction {
    Call,
    Raise,
    Check,
    Fold
}

struct Hand {
    Card card0;
    Card card1;
}

// todo: use table to store players
struct Game {
    uint8 turn;
    uint128 pot;
    Deck deck;
    mapping(address => uint8) playerToIndex; // todo: this vul for player not in the game (idx 0)
    PlayerGameState[] playerStates;
    Round round;
    Card[] communityCards;
    // uint8 dealer;
    // uint128 smallBlind;
    // uint128 bigBlind;
}

struct Round {
    uint8[] bets;
    uint biggestBet;
    uint id;
}


library GameUtils {
    using CardUtils for Card;
    using DeckUtils for Deck;

    function shuffle(Game storage game) internal {
        game.deck.fill();
    }

    function deal(Game storage game, address player, uint amount) internal returns (Game storage) {
        Card memory card0 = game.deck.pop();
        Card memory card1 = game.deck.pop();
        game.playerToIndex[player] = uint8(game.playerStates.length);
        game.playerStates.push(PlayerGameState({
            bet: 0,
            hand: Hand({
                card0: card0,
                card1: card1
            }),
            balance: amount
        }));
        return game;
    }

    function peekCards(Game storage game, address player) internal view returns (string memory, string memory) {
        PlayerGameState storage playerState = game.playerStates[game.playerToIndex[player]];
        return (
            playerState.hand.card0.toString(), 
            playerState.hand.card1.toString()
        );
    }

    function play(Game storage game, address player, PlayerAction action) internal {
        require(game.turn < game.playerStates.length, "Game is over");
        PlayerGameState storage playerState = game.playerStates[game.turn];
        require(game.playerToIndex[player] == game.turn, "Not your turn");

        if (action == PlayerAction.Fold) {
            playerState.balance = 0;
        } else if (action == PlayerAction.Check) {
            // todo: check if check is possible
        } else if (action == PlayerAction.Call) {
            // todo: reject if not enough balance or no cannot call
            uint diff = game.round.biggestBet - playerState.bet;
            playerState.balance -= diff;
            playerState.bet += diff;
            game.pot += uint128(diff);
        } else if (action == PlayerAction.Raise) {
            // todo: reject if not enough balance 
            uint diff = game.round.biggestBet - playerState.bet;
            playerState.balance -= diff;
            playerState.bet += diff;
            game.pot += uint128(diff);
            game.round.biggestBet += diff;
        }

        if (game.turn == game.playerStates.length - 1) {
            finishRound(game);
        } else {
            game.turn++;
        }
    }

    function finishRound(Game storage game) internal {
        // todo: rm player if out of money
        uint roundId = game.round.id;
        if (roundId == 0) {
            revealCommunityCards(game, 3);
        } else if (roundId == 1 || roundId == 2) {
            revealCommunityCards(game, 1);
        } else {
            finishGame(game);
        }
        game.round.id++;
        game.turn = 0;
    }

    function revealCommunityCards(Game storage game, uint num) internal {
        uint commCardsNum = game.communityCards.length;
        for (uint i = 0; i < num; i++) {
            game.communityCards.push(DeckUtils.pop(game.deck));
        }
    }

    function finishGame(Game storage game) internal {
        // todo: determine the winner
        // todo: settle all virtual balances for real
    }

}


// struct Table {
//     Game game;
//     Player[] players;
// }

// library TableUtils {

//     function create() internal view returns (Table memory) {
        
//     }

//     function join(Table storage table, address player) internal {
//         Player memory p = Player({
//             addr: player,
//             balance: msg.value
//         });
//         table.players.push(p);
//     }

//     function play() internal {
//         // check if game is in action 


//         // check if your turn 

//         // if end of round deal community cards

//         // if end of round 3 finish the game
//     }

// }

// enum TableStatus {
//     InAction,
//     Open,
//     Closed
// }