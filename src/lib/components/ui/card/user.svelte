<script>
  export let item = {
    id: '',
    owner: '',
    city: '',
    region: '',
    description: '',
    name: '',
    logo: '',
    phone: '',
    email: '',    
    url1: '',
    url2: '',
    url3: '',    
    url4: '',
    url5: '',            
  };
</script>


<!-- <div class="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer" on:click>
  <img class="w-full h-48 object-cover" src={item.logo} alt={item.name} />
  <div class="p-4">
    <h2 class="font-bold text-xl mb-2">{item.name}</h2>
    <p class="text-gray-700 text-base mb-4">{item.description}</p>
    <p class="text-lg font-semibold mb-4">{item.city}</p>
    <button  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Visit Website
    </button>
  </div>
</div> -->


<div class="bg-card border rounded-lg shadow-md p-6">
  <div class="flex items-center mb-4">
    <img src={item.logo} alt="{item.name} Logo" class="w-16 h-16 rounded-full mr-4" />
    <div>
      <h2 class="text-xl font-bold">{item.name}</h2>
      <p class="text-gray-600">{item.city}, {item.regiom}</p>
    </div>
  </div>
  <p class="text-gray-700 mb-4">{item.description}</p>


<div class="flex items-center">

{#if item.phone}
  <div class="mr-4">
    <svg width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5e5c64"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#5e5c64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </div>
  <div class="ml-4">
    <p>{item.phone}</p>
  </div>
{/if}


{#if item.email}
  <div class="mr-4">
    <svg width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#5e5c64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#5e5c64" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
  </div>
  <div class="ml-4">
    <p>{item.email}</p>
  </div>
{/if}

</div>



  <p class="font-semibold">

    <a href={`tel:${0}`} class="text-blue-600"></a></p>
  <p class="font-semibold">Email: <a href={`mailto:${0}`} class="text-blue-600">{item.email}</a></p>
  
  <div class="flex space-x-4 mt-4">
    {#if item.url1}
      <a href={item.url1} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600">
        <i class="fab fa-facebook-f"></i>
      </a>
    {/if}
    {#if item.url2}
      <a href={item.url2} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600">
        <i class="fab fa-twitter"></i>
      </a>
    {/if}
    {#if item.url3}
      <a href={item.url3} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600">
        <i class="fab fa-linkedin-in"></i>
      </a>
    {/if}
    {#if item.url4}
      <a href={item.url4} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600">
        <i class="fab fa-instagram"></i>
      </a>
    {/if}
  </div>
</div>

<!-- on:click={handleAddToCart} -->
