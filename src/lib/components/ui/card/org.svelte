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


<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer" on:click>
  <img class="w-full h-48 object-cover" src={item.logo} alt={item.name} />
  <div class="p-4">
    <h2 class="font-bold text-xl mb-2">{item.name}</h2>
    <p class="text-gray-700 text-base mb-4">{item.description}</p>
    <p class="text-lg font-semibold mb-4">{item.city}</p>
    <button  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Visit Website
    </button>
  </div>
</div>


<div class="bg-white border rounded-lg shadow-md p-6">
  <div class="flex items-center mb-4">
    <img src={item.logo} alt="{item.name} Logo" class="w-16 h-16 rounded-full mr-4" />
    <div>
      <h2 class="text-xl font-bold">{item.name}</h2>
      <p class="text-gray-600">{item.city}, {item.regiom}</p>
    </div>
  </div>
  <p class="text-gray-700 mb-4">{item.description}</p>
  <p class="font-semibold">Phone: <a href={`tel:${0}`} class="text-blue-600">{item.phone}</a></p>
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
