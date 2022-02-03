<script lang="ts">
  import { Card, Rank, Suit } from "rummy-lib";
  import { convertRank, convertSuit } from "./renderUtils";
  export let card: Card;
  export let isEnemy: boolean;
</script>

<div class:enemy={isEnemy} class:red={card.suit==Suit.HEARTS || card.suit==Suit.DIAMONDS} class="card">
  {#if !isEnemy}
    <p class="symbol">
      {convertSuit(card.suit)}
	  {convertRank(card.rank)}
    </p>
    <p class="text">{card.score}</p>
    <p class="symbol rotated">
      {convertSuit(card.suit)}
	  {convertRank(card.rank)}
    </p>
  {/if}
</div>

<style>
  .card {
    aspect-ratio: 2/3;
    height: 20vh;
    border: 1px black solid;
    border-radius: 0.75rem;
    padding: 0.75rem;
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0);
  }
  .enemy {
    background-color: rgb(185 28 28);
  }
  .symbol {
    font-size: 1.5rem;
  }
  .rotated {
    transform: rotate(180deg);
  }
  .text {
	  align-self: center;
	  font-size: 1.5rem;
  }
  .red {
	  color: red;
  }
</style>
