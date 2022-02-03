<script lang="ts">
  import type { Rummy } from "rummy-lib";
  import Handview from "./handview.svelte";
  import Playerview from "./playerview.svelte";
  import Stackview from "./stackview.svelte";
  export let rummy: Rummy;
</script>

<div class="view">
  <!-- <div class="spacer"> -->
  <div class="row">
    Player 0
    <Playerview player={rummy.players[0]} isEnemy={true} />
  </div>
  <!-- </div> -->
  <div class="row">
    <Stackview stack={rummy.board.stock} />
    <Stackview stack={rummy.board.discard} />
  </div>
  <div class="row">
    Player 1
    <Playerview player={rummy.players[1]} isEnemy={false} />
  </div>
</div>

<style>
  .view {
    display: flex;
    flex-direction: column;
    padding-top: 1vh;
    padding-bottom: 1vh;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
    overflow-y: hidden;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1vw;
  }
  .spacer {
    transform: translate(0vh, -10vh);
  }
</style>
