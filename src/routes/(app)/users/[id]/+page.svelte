<script lang="ts">
  import type { PageServerData } from "./$types";
  import { Button } from '$lib/components/ui/button';
  import ItemCard from '$lib/components/ui/card/item.svelte';
  import { cart, addToCart } from '$lib/cartStore';
  import { goto } from '$app/navigation';

  // expose session data?
  export let data: PageServerData;
  // export let items: PageServerData;

  console.log('Page Svelte Items: ', data.items);

  console.log('Page Svelte Profile: ', data.profile);

  const go = (id) => {
    goto(`/items/${id}`);
  };

</script>

<div class="p-6">
    <!-- Card start -->
        <div class="mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div class="border-b px-4 pb-6">
                <div class="text-center my-4">

                    {#if data.profile.photo}                    
                        <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src={data.profile.photo} alt="">
                    {/if}                                            
                    <div class="py-2">
                    {#if data.profile.name}                                            
                        <h1 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">{data.profile.name}</h1>
                    {/if}                                                                    
                        <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path class=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>
                            {data.profile.description}
                        </div>
                    </div>
                </div>
                <div class="flex justify-center gap-2 px-2">

                    <Button class="flex flex-nowrap items-center gap-2"
                    >Follow</Button>

                    <Button variant="outline" class="flex flex-nowrap items-center gap-2"
                    >Follow</Button>

                    <Button variant="secondary" class="flex flex-nowrap items-center gap-2"
                    >Follow</Button>                               

                </div>
            </div>
            <div class="px-4 py-4">
                <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                    <svg height="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#5e5c64;} </style> <g> <path class="st0" d="M474.38,192.05c-14.413-36.829-43.215-67.2-80.869-80.423c-40.875-14.34-83.482-6.199-123.938,4.969 c-0.768-22.101,1.101-44.266,4.241-66.149c1.78-12.349,10.301-37.897-10.837-38.771c-17.544-0.728-17.593,22.756-19.301,34.733 c-3.301,22.975-5.251,46.258-4.62,69.483c-9.719-1.618-19.316-5.236-28.996-7.243c-14.437-2.978-29.141-4.839-43.894-4.856 c-28.429,0-56.486,7.534-79.881,23.987c-45.431,31.966-63.122,87.74-62.353,141.328c0.841,58.023,20.49,113.432,53.548,160.758 c14.591,20.895,31.366,40.932,52.1,56.008c20.15,14.647,42.655,21.51,67.087,25.005c10.374,1.498,20.936,1.538,31.277-0.153 c9.031-1.472,17.488-5.284,26.446-6.798c6.766-1.141,16.307,4.184,22.853,5.64c11.16,2.509,22.643,3.027,34.013,1.732 c41.604-4.742,74.565-23.509,101.942-54.973C473.409,387.13,509.291,281.19,474.38,192.05z M446.946,333.962 c-7.696,26.981-19.875,51.647-35.623,74.791c-13.943,20.491-30.104,40.795-50.821,54.794 c-19.026,12.843-44.776,19.859-67.718,17.755c-11.67-1.06-22.295-6.668-33.883-7.769c-12.973-1.221-24.965,5.721-37.614,7.445 c-49.737,6.766-89.018-27.02-115.99-64.464c-33.09-45.95-52.723-100.85-50.854-157.942c1.716-52.318,26.657-106.303,81.112-120.628 c27.24-7.153,55.928-3.042,82.754,3.861c11.613,2.97,23.598,7.793,35.648,8.44c9.274,1.068,19.479-3.172,28.243-5.584 c52.472-14.437,111.547-17.934,148.085,30.104C464.03,219.12,461.521,282.962,446.946,333.962z"></path> <path class="st0" d="M221.561,59.204c1.95-57.344-62.903-66.302-86.04-54.9C141.55,70.436,192.007,71.892,221.561,59.204z"></path> </g> </g></svg>

                    <span><strong class="text-black dark:text-white">12</strong> Items listed</span>
                </div>
                <div class="flex">
                    <div class="flex justify-end mr-2">

                      {#if data.items.length === 0}
                        <p>No items available for sale.</p>
                      {:else}
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {#each data.items as item}
                            <ItemCard {item} on:click={()=> go(item.id)} />
                          {/each}
                        </div>
                      {/if}                      
                              
                    </div>
                </div>
            </div>
        </div>
    <!-- Card end -->

</div>