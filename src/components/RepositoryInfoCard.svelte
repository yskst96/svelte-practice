<script lang="ts">
  import type { RepositoryInfo } from '../util/github';

  export let info: RepositoryInfo;
</script>

<style>
  .card {
    background-color: azure;
    padding: 8px;
    height: 100%;
  }
</style>

<div class="card">
  <div>{info.full_name}</div>
  <div>{info.description}</div>
  <div>{info.stargazers_count}</div>
  <div>{info.language}</div>
  <div>{info.url}</div>
  <div>{info.clone_url}</div>
</div>
