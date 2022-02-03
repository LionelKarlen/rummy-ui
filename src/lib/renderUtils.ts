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
      return "A";
    case Rank.JACK:
      return "J";
    case Rank.QUEEN:
      return "Q";
    case Rank.KING:
      return "K";
    default:
      return (rank + 1).toString();
  }
}
