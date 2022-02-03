<script lang="ts">
  export let submit = (delay, mode) => {};
  let mode;
  let delay=4;
</script>

<form on:submit|preventDefault={() => submit(delay, mode)}>
  <select name="Mode" id="mode" bind:value={mode}>
    <option value={0}>CFR vs CFR</option>
    <option value={1}>CFR vs Greedy</option>
    <option value={2}>Greedy vs Greedy</option>
  </select>
  <input type="number" name="Delay" id="delay" bind:value={delay} />
  <button type="submit">Start</button>
</form>
