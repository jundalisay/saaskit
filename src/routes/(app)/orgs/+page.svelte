<script lang="ts">
  import type { PageServerData } from './$types';
  import OrgCard from '$lib/components/ui/card/org.svelte';
  import { goto } from '$app/navigation';

  // expose session data?
  export let data: PageServerData;
  export let q: string = "";

  let sortOption = 'priceAsc'; // Default sort option
  let error = '';

  console.log('Page Svelte Items: ', data.items);

  // Function to sort items based on selected option
  const sortItems = () => {
    if (sortOption === 'priceAsc') {
      data.items.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      data.items.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'titleAsc') {
      data.items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'titleDesc') {
      data.items.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  // Function to handle dropdown change
  const handleSortChange = (event) => {
    sortOption = event.target.value;
    sortItems();
  };

  const goToDetails = (id) => {
    goto(`/items/${id}`);
  };
</script>


<svelte:head>
  <title>Orgs</title>
</svelte:head>

<!-- bind:value={sortOption} -->
<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Orgs</h1>
    <!-- max-w-md mx-auto -->
    <form class="w-full mb-4" method="GET" action="/search">      
        <div class="flex">
          <select bind:value={sortOption} on:change={handleSortChange} class="border border-gray-300 p-2 rounded">
            <option value="titleAsc">Sort by Name: A-Z</option>
            <option value="titleDesc">Sort by Name: Z-A</option>
          </select>      
          <div class="relative w-full">
            <!-- bind:value={q} -->
              <input type="search" name="q" value={q}  id="location-search" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for item" required />
              <button type="submit" class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span class="sr-only">Search</span>
              </button>
          </div>
    </form>
  
  <!-- on:add-to-cart={handleAddToCart}  -->
<!-- filteredProducts() -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#if data.orgs}
      {#each data.orgs as org}
        <OrgCard {org} />
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