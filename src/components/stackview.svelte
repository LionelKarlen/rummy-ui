<script lang="ts">
  import { Stack, StackType } from "rummy-lib";
  import CardView from "../../src/lib/cardView.svelte";

  export let stack: Stack;
</script>

<div>
  <CardView card={stack.cards[0]} isEnemy={stack.type == StackType.DISCARD} />
</div>
