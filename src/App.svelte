<script lang="ts">
  import type { Rummy } from "rummy-lib/lib";
  import { io } from "socket.io-client";

  import Gameview from "../src/components/gameview.svelte";
  import "./tailwind.css";
  const socket = io("http://localhost:3001");

  let r: Rummy;
  let isRunning = false;
  let isConnected = false;
  socket.on("connect", () => {
    console.log("connected");
    isConnected = true;
  });
  socket.on("error", () => {
	console.log("draw");
	alert("Draw");
  });
  socket.on("update", (rummy) => {
    r = rummy;
    console.log("update");
  });
  socket.on("won", (winner) => {
	  alert("Player "+winner+" won!");
  })
  function start() {
    isRunning = true;
    socket.emit("start");
  }
</script>

<main>
  {#if isConnected}
    {#if isRunning}
      {#if r}
        <Gameview rummy={r} />
      {/if}
    {:else}
      <button on:click={start}>Start</button>
    {/if}
  {/if}
</main>
