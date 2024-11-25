<script lang="ts">
  import NewForm from './new-form.svelte';
  
  export let data;
</script>



<div class="p-4 max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Create New Item</h1>

  <NewForm data={data.form} />

<!--     <div class="mb-4">
      <label class="block">Photo URLs</label>
      <small class="mb-4">The first URL will be the main photo</small>

      {#each Array(4) as _, index}
        <input
          type="text"
          placeholder={`Photo URL ${index + 1}`}
          bind:value={photoUrls[index]}
          class="border border-gray-300 rounded p-2 w-full mb-2"/>
      {/each}
    </div> -->

</div>