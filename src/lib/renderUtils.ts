import { Rank, Suit } from "rummy-lib/lib";

export function convertSuit(suit: Suit): string {
  switch (suit) {
    case Suit.CLUBS:
      return "♣";
    case Suit.DIAMONDS:
      return "♦";
    case Suit.HEARTS:
      return "♥";
    case Suit.SPADES:
      return "♠";
  }
}

export function convertRank(rank: Rank): string {
  switch (rank) {
    case Rank.ACE:
      return "ACE";
    case Rank.JACK:
      return "JACK";
    case Rank.QUEEN:
      return "QUEEN";
    case Rank.KING:
      return "KING";
    default:
      return (rank + 1).toString();
  }
}
