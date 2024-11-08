<!-- context="module"  -->
<script lang="ts">
  import type { PageServerData } from "./$types";
  import ItemCard from '$lib/components/ui/card/item.svelte';
  import { cart, addToCart } from '$lib/cartStore';
  import { goto } from '$app/navigation';

  // expose session data?
  export let data: PageServerData;

  console.log('Page Svelte: ', data.item);

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


<!--
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


<div class="p-4">
  <img class="w-full h-64 object-cover mb-4" src={data.item.photo} alt={data.item.title} />
  <h1 class="text-2xl font-bold mb-4">{data.item.name}</h1>
  <p class="text-lg mb-4">{data.item.description}</p>
  <p class="text-xl font-semibold mb-4">${data.item.price}</p>



    <label class="block mb-2">Amount to Get:</label>
    <input type="number" bind:value={amount} min="1" class="border border-gray-300 rounded p-2 w-full mb-4" />

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

    <button on:click={processTransaction} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Confirm
    </button>













  <button on:click={handleAddToCart} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Add to Cart
  </button>

  <button on:click={() => editProduct(item)} class="text-blue-500 hover:underline">
    Edit
  </button>

  <!-- <ProductForm {selectedProduct} on:submit={addOrUpdateProduct} on:delete={deleteProduct} /> -->

  <button on:click={() => deleteProduct(item)} class="text-blue-500 hover:underline">
    Delete
  </button>

</div>

