<script lang="ts">
  let name = '';
  let description = '';
  let points = 0;
  let price = 0;
  let location = '';
  let photoUrls = ['', '', '', '']; // Array to hold up to 4 photo URLs
  let errorMessage = '';
</script>


<div class="p-4 max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Create New Item</h1>

  {#if errorMessage}
    <p class="text-red-500 mb-4">{errorMessage}</p>
  {/if}

  <form on:submit|preventDefault={createItem}>
    <div class="mb-4">
      <label class="block mb-2" for="name">Name</label>
      <input
        type="text"
        id="name"
        bind:value={name}
        class="border border-gray-300 rounded p-2 w-full"
        required/>
    </div>

    <div class="mb-4">
      <label class="block mb-2" for="description">Description</label>
      <textarea
        id="description"
        bind:value={description}
        class="border border-gray-300 rounded p-2 w-full"
        required
      ></textarea>
    </div>

    <div class="mb-4">
      <label class="block mb-2" for="points">Points</label>
      <input
        type="number"
        id="points"
        bind:value={points}
        min="0"
        class="border border-gray-300 rounded p-2 w-full"
        required/>
    </div>

    <div class="mb-4">
      <label class="block mb-2" for="price">Price</label>
      <input
        type="number"
        id="price"
        bind:value={price}
        min="0"
        step="0.01"
        class="border border-gray-300 rounded p-2 w-full"
        required/>
    </div>

    <div class="mb-4">
      <label class="block mb-2" for="location">Location</label>
      <input
        type="text"
        id="location"
        bind:value={location}
        class="border border-gray-300 rounded p-2 w-full"
        required/>
    </div>

    <div class="mb-4">
      <label class="block mb-2">Photo URLs</label>
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
  </form>
</div>