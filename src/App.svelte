<script lang="ts">
  import { onMount } from 'svelte';
  import { serchRepositories } from './util/github';
  import type { RepositoryInfo } from './util/github';

  import TextInput from './components/TextInput.svelte';
  import Button from './components/Button.svelte';
  import PullDown from './components/PullDown.svelte';
  import RepositoryInfoCard from './components/RepositoryInfoCard.svelte';

  let repositoryInfoList: Array<RepositoryInfo>;
  let topicList: Array<string>;
  let loading = true;
  let serchWord: string = '';
  let serchTopic: string = '';

  const handleSerchInput = (event) => {
    serchWord = event.target.value;
  };

  const handleSerchTopic = (event) => {
    serchTopic = event.target.value;
    console.log(serchTopic);
  };

  const serch = async () => {
    repositoryInfoList = await serchRepositories(serchWord, serchTopic);
  };

  onMount(async () => {
    // repositoryInfoList = await serchRepositories('vue', 'javascript');
    repositoryInfoList = [
      {
        full_name: 'vue',
        description: 'descriptiondescriptiondescriptiondescription',
        stargazers_count: 20,
        language: 'javascript',
        url: 'https://xxxxxxxx',
        clone_url: 'https://yyyyyyyyyy',
      },
      {
        full_name: 'vue',
        description: 'descriptiondescriptiondescriptiondescription',
        stargazers_count: 20,
        language: 'javascript',
        url: 'https://xxxxxxxx',
        clone_url: 'https://yyyyyyyyyy',
      },
      {
        full_name: 'vue',
        description: 'descriptiondescriptiondescriptiondescription',
        stargazers_count: 20,
        language: 'javascript',
        url: 'https://xxxxxxxx',
        clone_url: 'https://yyyyyyyyyy',
      },
      {
        full_name: 'vue',
        description: 'descriptiondescriptiondescriptiondescription',
        stargazers_count: 20,
        language: 'javascript',
        url: 'https://xxxxxxxx',
        clone_url: 'https://yyyyyyyyyy',
      },
    ];

    // TODO fetch from Github API
    topicList = ['javascript', 'ruby', 'php'];

    console.log(repositoryInfoList);
    loading = false;
  });
</script>

<style>
  .serch-form {
    display: flex;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    margin-right: 8px;
    margin-top: 24px;
    width: 400px;
  }
</style>

<main>
  <h1>github repos</h1>
  <div class="serch-form">
    <div>
      <TextInput value={serchWord} on:input={handleSerchInput} />
    </div>
    <div>
      <PullDown options={topicList} on:input={handleSerchTopic} />
    </div>
    <div>
      <Button on:click={serch}>検索</Button>
    </div>
  </div>
  {#if loading}
    <div>
      <div>loading...</div>
    </div>
  {:else}
    <div class="card-container">
      {#each repositoryInfoList as repo}
        <div class="card">
          <RepositoryInfoCard info={repo} />
        </div>
      {/each}
    </div>
  {/if}

</main>
