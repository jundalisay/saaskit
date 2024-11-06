<!-- context="module"  -->
<script lang="ts">
  import type { PageServerData } from "./$types";
  import ItemCard from '$lib/components/ui/card/item.svelte';
  import { cart, addToCart } from '$lib/cartStore';
  import { goto } from '$app/navigation';

  export let item;
  export let data: PageServerData;

  // let data: PageServerData;
   // = $props();

  console.log('Page Svelte: ' + data.name);

  // export let item : {
  //   id: string,
  //   name: string,
  //   description: string,
  //   price: decimal,
  //   photo: string,
  // };

    // const addOrUpdateProduct = (item) => {
    //   if (item.id) {
    //     // Update existing item
    //     items = items.map(p => (p.id === item.id ? item : p));
    //     selectedProduct = null; // Clear selection after update
    //   } else {
    //     // Add new item
    //     item.id = Date.now().toString(); // Simple ID generation
    //     items = [...items, item];
    //   }
    // };

    // const deleteProduct = (id) => {
    //   items = items.filter(item => item.id !== id);
    //   selectedProduct = null; // Clear selection after deletion
    // };

    // const editProduct = (item) => {
    //   selectedProduct = { ...item }; // Set the selected item for editing
    // };
</script>


<!-- <script lang="js">
  import { addToCart } from '$lib/cartStore';
  import { goto } from '$app/navigation';
  export let item;

  const handleAddToCart = () => {
    const cartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: 1, // Default quantity
    };
    addToCart(cartItem);
    goto('/checkout'); // Redirect to checkout
  };
</script> -->

  <!-- <ProductForm {selectedProduct} on:submit={addOrUpdateProduct} on:delete={deleteProduct} /> -->
<!--   {#if items.length > 0}
    <ul class="mt-4">
      {#each items as item}
        <li class="flex items-center justify-between border-b border-gray-200 py-2">
          <span>{item.title} - ${item.price}</span>
          <button on:click={() => editProduct(item)} class="text-blue-500 hover:underline">
            Edit
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No items found.</p>
  {/if} -->

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">{data}</h1>

{data.item}
<!--   <img class="w-full h-64 object-cover mb-4" src={item.imageUrl} alt={item.title} />
  <p class="text-lg mb-4">{item.description}</p>
  <p class="text-xl font-semibold mb-4">${item.price}</p>
  <button on:click={handleAddToCart} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Add to Cart
  </button> -->
</div>

