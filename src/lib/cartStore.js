import { writable } from 'svelte/store';

export const cart = writable([]);

// Function to add item to cart
export const addToCart = (item) => {
  cart.update((currentItems) => {
    const existingItem = currentItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists in the cart, increase the quantity
      existingItem.quantity += item.quantity;
    } else {
      // Otherwise, add the new item
      currentItems.push(item);
    }
    return currentItems;
  });
};

// Function to get total price of items in the cart
export const getTotalPrice = () => {
  let total = 0;
  cart.subscribe(items => {
    total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  })();
  return total;
};