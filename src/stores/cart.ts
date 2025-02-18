// stores/cart.ts
import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';
import { useAuthStore } from './auth';

export const useCartStore = defineStore('cart', () => {
  const authStore = useAuthStore(); 
  const cart = ref<any[]>([]);

  const loadCart = () => {
    if (authStore.user) {
      const userCartKey = `cart_${authStore.user.id}`;
      const userCart = JSON.parse(localStorage.getItem(userCartKey) || '[]');
      cart.value = userCart;
    }
  };

  const addToCart = (dish) => {
    if (authStore.user) {
      const userCartKey = `cart_${authStore.user.id}`;
      let userCart = JSON.parse(localStorage.getItem(userCartKey) || '[]');
      userCart.push(dish);
      localStorage.setItem(userCartKey, JSON.stringify(userCart));
      cart.value = userCart;
    }
  };


  const removeFromCart = (index: number) => {
    if (authStore.user && index >= 0 && index < cart.value.length) {
      cart.value.splice(index, 1);
      const userCartKey = `cart_${authStore.user.id}`;
      localStorage.setItem(userCartKey, JSON.stringify(cart.value));
    } else {
      console.error('Erreur lors du retrait de l\'article.');
    }
  };

  const clearCart = () => {
    if (authStore.user) {
      const userCartKey = `cart_${authStore.user.id}`;
      localStorage.removeItem(userCartKey);
      cart.value = [];
    }
  };

  
  watchEffect(() => {
    if (authStore.user) {
      loadCart();
    } else {
      clearCart(); 
    }
  });

  return {
    cart,
    addToCart,
    removeFromCart,
    loadCart,
    clearCart
  };
});
