<script>
  import { cart, getTotalPrice } from '$lib/cartStore';
  import { onMount } from 'svelte';

  let cartItems = [];
  let totalPrice = 0;

  // Subscribe to the cart store
  const unsubscribe = cart.subscribe(items => {
    cartItems = items;
    totalPrice = getTotalPrice();
  });

  onMount(() => {
    return () => {
      unsubscribe(); // Clean up the subscription
    };
  });
</script>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Checkout</h1>
  
  {#if cartItems.length > 0}
    <table class="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border border-gray-300 p-2">Product</th>
          <th class="border border-gray-300 p-2">Quantity</th>
          <th class="border border-gray-300 p-2">Price</th>
          <th class="border border-gray-300 p-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {#each cartItems as item}
          <tr>
            <td class="border border-gray-300 p-2">{item.title}</td>
            <td class="border border-gray-300 p-2">{item.quantity}</td>
            <td class="border border-gray-300 p-2">${item.price.toFixed(2)}</td>
            <td class="border border-gray-300 p-2">${(item.price * item.quantity).toFixed(2)}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <div class="mt-4 font-bold">
      Total Price: ${totalPrice.toFixed(2)}
    </div>
  {:else}
    <p>No items in the cart.</p>
  {/if}
</div>