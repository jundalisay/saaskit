<script lang="ts">
  import ItemCard from '$lib/components/ui/card/item.svelte';
  import { cart, addToCart } from '$lib/cartStore';
  import { goto } from '$app/navigation';

  export let data;

  let searchQuery = '';
  let sortOption = 'priceAsc'; // default sort option

  // const filteredProducts = () => {
  //   return items
  //     .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  //     .sort((a, b) => {
  //       if (sortOption === 'priceAsc') return a.price - b.price;
  //       if (sortOption === 'priceDesc') return b.price - a.price;
  //       return a.title.localeCompare(b.title); // Sort by title alphabetically
  //     });
  // };

  console.log('Items: ', data);

  const handleAddToCart = (event) => {
    addToCart(event.detail);
  };

  const goToDetails = (id) => {
    goto(`/items/${id}`);
  };
</script>


<svelte:head>
  <title>Items</title>
</svelte:head>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Items</h1>
  <div class="flex flex-col md:flex-row md:justify-between mb-4">
    <input type="text" placeholder="Search items..." bind:value={searchQuery} class="border border-gray-300 p-2 rounded mb-2 md:mb-0 md:w-1/2" />
    <select bind:value={sortOption} class="border border-gray-300 p-2 rounded">
      <option value="priceAsc">Sort by Price: Low to High</option>
      <option value="priceDesc">Sort by Price: High to Low</option>
      <option value="titleAsc">Sort by Title: A-Z</option>
      <option value="titleDesc">Sort by Title: Z-A</option>
    </select>
  </div>

<!-- filteredProducts() -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#if data.items}
      {#each data.items as item}
        <ItemCard {item} on:add-to-cart={handleAddToCart} on:click={() => goToDetails(item.id)} />
      {/each}
    {:else}
    {/if}
  </div>
</div>

<!-- <script>
  import { onMount } from 'svelte';
  import ProductCard from '$lib/components/ui/card/item.svelte';

  let items = [
    {
      id: '1',
      title: 'French Fries',
      description: 'This is a great item.',
      price: 29.99,
      imageUrl: '/images/fries.jpg',
    },
    {
      id: '2',
      title: 'Coffee Beans',
      description: 'This item is awesome.',
      price: 49.99,
      imageUrl: '/images/coffee.jpg',
    },
    {
      id: '3',
      title: 'Potato',
      description: 'You will love this item.',
      price: 19.99,
      imageUrl: '/images/potato.jpg',
    },
    {
      id: '4',
      title: 'iPhone',
      description: 'An excellent choice for everyone.',
      price: 39.99,
      imageUrl: '/images/ios.jpg',
    },
  ];

  let searchQuery = '';
  let sortOption = 'priceAsc'; // default sort option

  // Function to filter items based on the search query
  const filteredProducts = () => {
    return items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => {
      if (sortOption === 'priceAsc') {
        return a.price - b.price;
      } else if (sortOption === 'priceDesc') {
        return b.price - a.price;
      } else {
        return a.title.localeCompare(b.title); // Sort by title alphabetically
      }
    });
  };

 const handleAddToCart = (event) => {
    addToCart(event.detail);
  };
</script>



<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Product List</h1>
  
  <div class="flex flex-col md:flex-row md:justify-between mb-4">
    <input
      type="text"
      placeholder="Search items..."
      bind:value={searchQuery}
      class="border border-gray-300 p-2 rounded mb-2 md:mb-0 md:w-1/2"
    />
    <select
      bind:value={sortOption}
      class="border border-gray-300 p-2 rounded"
    >
      <option value="priceAsc">Sort by Price: Low to High</option>
      <option value="priceDesc">Sort by Price: High to Low</option>
      <option value="titleAsc">Sort by Title: A-Z</option>
      <option value="titleDesc">Sort by Title: Z-A</option>
    </select>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each filteredProducts() as item}

		<ProductCard {item} on:add-to-cart={handleAddToCart} />      
    {/each}
  </div>
</div> -->