
enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades
}

enum Rank {
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace
}

struct Card {
    Suit suit;
    Rank rank;
}

library CardUtils {

    function create(uint8 index) internal pure returns (Card memory) {
        return Card({
            suit: getSuit(index),
            rank: getRank(index)
        });
    }

    function getSuit(uint8 index) internal pure returns (Suit) {
        return Suit(index / 13);
    }

    function getRank(uint8 index) internal pure returns (Rank) {
        return Rank(index % 13);
    }

    function toString(Suit suit) internal pure returns (string memory) {
        return 
            suit == Suit.Hearts ? "Hearts" : 
            suit == Suit.Diamonds ? "Diamonds" : 
            suit == Suit.Clubs ? "Clubs" : 
            "Spades";
    }

    function toString(Rank rank) internal pure returns (string memory) {
        return 
            rank == Rank.Two ? "Two" : 
            rank == Rank.Three ? "Three" : 
            rank == Rank.Four ? "Four" : 
            rank == Rank.Five ? "Five" : 
            rank == Rank.Six ? "Six" : 
            rank == Rank.Seven ? "Seven" : 
            rank == Rank.Eight ? "Eight" : 
            rank == Rank.Nine ? "Nine" : 
            rank == Rank.Ten ? "Ten" : 
            rank == Rank.Jack ? "Jack" : 
            rank == Rank.Queen ? "Queen" : 
            rank == Rank.King ? "King" : 
            "Ace";
    }

    function toString(Card memory card) internal pure returns (string memory) {
        return string(abi.encodePacked(toString(card.rank), " of ", toString(card.suit)));
    }
}
