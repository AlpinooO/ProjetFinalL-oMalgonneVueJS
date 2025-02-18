<template>
    <div v-if="chef">
      <h1>{{ chef.name }}</h1>
      <img :src="chef.photo" alt="Chef photo" class="chef-photo" />
      <p><strong>Spécialité :</strong> {{ chef.specialty }}</p>
  
      <h2>Plats préparés</h2>
      <div v-if="chef.dishes && chef.dishes.length > 0">
        <div v-for="(dish, index) in chef.dishes" :key="index" class="dish-card">
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.description }}</p>
          <p><strong>Prix : </strong>{{ dish.price }}€</p>
          <button @click="addToCart(dish)" class="button is-success">Ajouter au panier</button>
        </div>
      </div>
      <div v-else>
        <p>Aucun plat disponible.</p>
      </div>
    </div>
    <div v-else>
      <p>Chargement des détails du cuisinier...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useCartStore } from '../stores/cart.ts'; 
  
  const route = useRoute();
  interface Chef {
    id: number;
    name: string;
    photo: string;
    specialty: string;
    dishes: { name: string; description: string; price: number }[];
  }

  const chef = ref<Chef | null>(null);
  const cartStore = useCartStore(); 
  

  onMounted(async () => {
    const chefId = parseInt(route.params.id as string);
    try {
      const response = await fetch('../data/cookers.json');
      const chefs = await response.json();
      chef.value = chefs.find((c: Chef) => c.id === chefId);
    } catch (error) {
      console.error('Erreur lors du chargement des détails du cuisinier:', error);
    }
  });
  
 
  const addToCart = (dish: { name: string; description: string; price: number }) => {
    cartStore.addToCart(dish); 
  };
  </script>
  
  <style scoped>
  .chef-photo {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .dish-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  </style>
  