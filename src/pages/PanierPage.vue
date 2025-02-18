<template>
    <div class="cart-page container">
      <h2 class="title is-3 has-text-centered">Votre Panier</h2>
      <div v-if="!authStore.user" class="notification is-danger has-text-centered">
        <p>Veuillez vous connecter avant d'accéder au panier.</p>
        <router-link to="/login" class="button is-primary">Se connecter</router-link>
      </div>
      <div v-else>
        <div v-if="cart.length === 0" class="notification is-warning has-text-centered">
          Votre panier est vide.
        </div>
        <ul>
          <li v-for="(item, index) in cart" :key="index" class="box">
            <p><strong>{{ item.name }}</strong> - {{ item.price }}€</p>
            <button @click="removeFromCart(index)" class="button is-danger">Retirer</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from '../stores/auth';
  import { useCartStore } from '../stores/cart';
  
  const authStore = useAuthStore();
  const cartStore = useCartStore();
  

  cartStore.loadCart();
  

  const cart = cartStore.cart;
  
 
  const removeFromCart = (index) => {
    cartStore.removeFromCart(index); 
  };
  </script>
  