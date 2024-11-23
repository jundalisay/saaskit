<script lang="ts">
  import NewForm from './new-form.svelte';
  
  export let data;
  //: PageData;  
  // let name = '';
  // let description = '';
  // let points = 0;
  // let price = 0;
  // let location = '';
  // let photoUrls = ['', '', '', '']; // Array to hold up to 4 photo URLs
  // let errorMessage = '';
</script>



<div class="p-4 max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Create New Item</h1>

<!--   {#if errorMessage}
    <p class="text-red-500 mb-4">{errorMessage}</p>
  {/if} -->

<!-- <EmailForm data={data.emailForm} user={data.user} /> -->
<NewForm data={data.form} />

  <!-- <form on:submit|preventDefault={createItem}> -->
<!--   <form method="POST" use:enhance class="grid gap-4">


    <div class="mb-4">
      <label class="block">Photo URLs</label>
      <small class="mb-4">The first URL will be the main photo</small>

      {#each Array(4) as _, index}
        <input
          type="text"
          placeholder={`Photo URL ${index + 1}`}
          bind:value={photoUrls[index]}
          class="border border-gray-300 rounded p-2 w-full mb-2"/>
      {/each}
    </div>

    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Create Item
    </button>
  </form> -->
</div>