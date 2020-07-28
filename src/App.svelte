<script lang="ts">
  import { onMount } from 'svelte';
  import { serchRepositories } from './util/github';
  import type { RepositoryInfo } from './util/github';

  import RepositoryInfoCard from './components/RepositoryInfoCard.svelte';

  let repositoryInfoList: Array<RepositoryInfo>;

  onMount(async () => {
    repositoryInfoList = await serchRepositories();
    console.log(repositoryInfoList);
  });
</script>

<style>

</style>

<main>
  <h1>github repos</h1>
  {#if repositoryInfoList && repositoryInfoList.length != 0}
    <div>
      <RepositoryInfoCard info={repositoryInfoList[0]} />
    </div>
  {:else}
    <div>loading...</div>
  {/if}

</main>
