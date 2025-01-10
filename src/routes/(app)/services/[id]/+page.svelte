<!-- context="module"  -->
<script lang="ts">
  import type { PageServerData } from "./$types";
  import ItemCard from '$lib/components/ui/card/item.svelte';
  import { cart, addToCart } from '$lib/cartStore';
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';


  // expose session data?
  export let data: PageServerData;
  let quantity = writable(0);
  let errorMessage = writable('');
  let successMessage = writable('');


  console.log('Page Svelte ITEM SHOW: ', data.item);

  let item; // This will hold the item data
  let amount = 0;
  let paymentMethod = 'Exchange';

  const handleAddToCart = (event) => {
    addToCart(event.detail);
  };

  
  const processTransaction = async () => {
    if (!item || amount <= 0) {
      alert('Please enter a valid amount and ensure the item is loaded.');
      return;
    }

    const totalPrice = item.price * amount;

    // Assuming you have user IDs available
    const buyerId = 'buyer-user-id'; // Replace with actual buyer ID logic
    const sellerId = item.user_id; // Assuming item has a user_id field

    const { error } = await supabase
      .from('transactions')
      .insert([
        {
          item_name: item.title,
          amount,
          total_price: totalPrice,
          buyer_id: buyerId,
          seller_id: sellerId
        }
      ]);

    if (error) {
      console.error('Error processing transaction:', error);
      // Handle error
    } else {
      // Redirect to a transaction details page with the transaction ID (if you store it)
      goto(`/transaction?itemId=${item.id}`);
    }
  };

  const go = (id) => {
    goto(`/users/${id}/`);
  }; 

  function re(id) {
    goto(`/users/${id}`);
  };    
</script>


<form method="POST" class="p-4">

  <img class="w-full h-64 object-cover mb-4" src={data.item.photo} alt={data.item.title} />
  <h1 class="text-2xl font-bold mb-4">{data.item.name}</h1>
  <p class="text-lg mb-4">{data.item.description}</p>
  <p class="text-xl font-semibold mb-4">${data.item.price}</p>

    <label class="block mb-2">Amount to Get:</label>
    <input required id="quantity" type="number" bind:value={amount} min="1" class="border border-gray-300 rounded p-2 w-full mb-4" />
  
  {#if $errorMessage}
    <div class="error-message" style="color: red;">
      {$errorMessage}
    </div>
  {/if}

    <fieldset class="mb-4">
      <legend class="block mb-2">Receiving as:</legend>
      <label class="inline-flex items-center mr-4">
        <input type="radio" value="Exchange" bind:group={paymentMethod} checked class="form-radio" />
        <span class="ml-2">Exchange</span>
      </label>
      <label class="inline-flex items-center mr-4">
        <input type="radio" value="Donation" bind:group={paymentMethod} class="form-radio" />
        <span class="ml-2">Donation</span>
      </label>
      <label class="inline-flex items-center">
        <input type="radio" value="Transfer" bind:group={paymentMethod} class="form-radio" />
        <span class="ml-2">Transfer</span>
      </label>
    </fieldset>

<!--     <button on:click={processTransaction} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Confirm
    </button>

  <button on:click={handleSubmit}>Submit</button>

  <button on:click={handleAddToCart} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Add to Cart
  </button> -->

<!--   <button on:click={() => editProduct(item)} class="text-blue-500 hover:underline">
    Edit
  </button>

  <button on:click={() => deleteProduct(item)} class="text-blue-500 hover:underline">
    Delete
  </button> -->
  <!-- <button on:click={() => window.location.href = `/items/{data.item.id}/edit`}>Edit2</button> -->
  <!-- <ProductForm {selectedProduct} on:submit={addOrUpdateProduct} on:delete={deleteProduct} /> -->

            <!-- <button type="submit" class="bg-blue-500 rounded-lg hover:bg-blue-600 text-white font-bold mt-3 min-w-[145px]">Submit</button> -->
  <button type="submit" class="btn btn-primary">Save</button>

</form>

  <button on:click={re(item.id)}>home</button>

