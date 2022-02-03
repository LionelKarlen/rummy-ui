<script lang="ts">
import type { Meld, Player } from "rummy-lib/lib";
import Handview from "./handview.svelte";


export let player: Player;
export let isEnemy: boolean;

let melds: Meld[]= player.meldStack.melds;
$: player, melds=player.meldStack.melds;
</script>

<div class="player">
<div>
<Handview cards={player.hand.cards} {isEnemy}/>
</div>
<div class="meld player">
	{#each melds as meld}
		<Handview cards={meld.cards} isEnemy={false}/>
	{/each}
</div>

</div>

<style>
	.player {
		display: flex;
		flex-direction: row;
		gap: 1vw;
	}
	.meld {
		max-width: 50vw;
	}
</style>