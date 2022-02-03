<script lang="ts">
  import { Card, Rank, Rummy, Score, Suit } from "rummy-lib";
  import CardView from "../../src/lib/cardView.svelte";
import Handview from "./handview.svelte";
export let rummy: Rummy;

  let card: Card = {
    isDiscard: false,
    rank: Rank.ACE,
    score: Score.ACE,
    suit: Suit.CLUBS,
  };
  let card2: Card = {
    isDiscard: false,
    rank: Rank.EIGHT,
    score: Score.EIGHT,
    suit: Suit.HEARTS,
  };
  let cards = [
	  card,
	  card2
  ]
</script>

<div class="view">

<Handview cards={rummy.players[1].hand.cards} isEnemy={true} />
<Handview cards={rummy.players[0].hand.cards} isEnemy={false} />

</div>

<style>
	.view {
		display: flex;
		flex-direction: column;
		padding-left: 10vw;
		padding-right: 10vw;
		padding-top: 1vh;
		padding-bottom: 1vh;
		align-items: center;
		height: 100vh;
		justify-content: space-between;
	}
</style>