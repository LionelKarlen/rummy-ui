<script lang="ts">
  import type { Card } from "rummy-lib";
  import CardView from "../../src/lib/cardView.svelte";

  export let cards: Card[];
  export let isEnemy: boolean;
</script>

<div class="handview">
  {#each cards as card}
    <div class="wrapper">
      <CardView {card} {isEnemy} />
    </div>
  {/each}
</div>

<style>
  .handview {
    display: flex;
    flex-direction: row;
    align-content: center;
    max-width: 45rem;
  }
  .wrapper {
    overflow: hidden;
  }
  .wrapper:last-child,
  .wrapper:hover {
    overflow: visible;
  }
</style>
