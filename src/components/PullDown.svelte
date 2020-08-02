<script lang="ts">
  export let options: Array<string>;
</script>

<style>

</style>

<div class="container">
  {#if options && options.length > 0}
    <select on:input>
      <option value="">トピック</option>
      {#each options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  {/if}

</div>
