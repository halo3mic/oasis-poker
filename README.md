# Oasis Poker

A shared secret states showcase with Oasis Sapphire

## Prerequisites

- Oasis Sapphire
- TypeScript

## Setup

- tbd

## Running

- tbd

## Flow

### Setup

1. Init a table with parameters: `smallBlind, bigBlind`
2. Users Alice, Bob and Charlie join the table (FIFO ordering, indices `0, 1, 2`)
3. Select `firstDealer` as initial value for index `d` randomly (Sapphire-shared RNG seed), e.g. as Bob=`1`
4. Table collects `smallBlind` from user `d+1` (Charlie) and `bigBlind` from user `d+2` (Alice), each `mod numberOfPlayers`
5. Table hands out two random cards to each of the three players

### Each round

1. For `i` in `0..numberOfPlayers`, Player `d+3+i mod numberPlayers` is requried to make one of these choices:
   1. Fold
   2. Raise
   3. Check (if allowed)
2. Reveal next card(s)
3. If last round, identify winning hand
