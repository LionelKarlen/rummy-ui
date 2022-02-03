<script lang="ts">
import { Rummy } from "rummy-lib/lib";

import Gameview from "../src/components/gameview.svelte";
import './tailwind.css'

let r = new Rummy();
</script>

<main>
  <Gameview rummy={r}/>
</main>
