<template>
    <header class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <!-- Logo ou nom du site, qui sert de lien vers la page d'accueil -->
          <router-link to="/" class="navbar-item">Home</router-link>
  
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
  
        <div :class="['navbar-menu', { 'is-active': isMenuActive }]">
          <div class="navbar-start">
            <router-link to="/cooker" class="navbar-item">Cooker</router-link>
            <router-link to="/panier" class="navbar-item">Panier</router-link>
          </div>
          <div class="navbar-end">
            <router-link to="/login" class="navbar-item">Login</router-link>
            <router-link to="/register" class="navbar-item">Register</router-link>
            <a v-on:click="handleDeconnexion" class="navbar-item has-text-danger">Déconnexion</a>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';
  
  const store = useAuthStore();
  const router = useRouter();
  
  const isMenuActive = ref(false);
  
  const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
  };
  
  const handleDeconnexion = () => {
    store.logout();
    router.push('/');
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #00d1b2;
  }
  
  .navbar-item {
    color: white;
    font-weight: bold;
  }
  
  .navbar-item.has-text-danger {
    cursor: pointer;
  }
  
  .navbar-burger {
    display: none;
  }
  
  @media screen and (max-width: 768px) {
    .navbar-menu {
      display: none;
    }
  
    .navbar-burger {
      display: block;
      cursor: pointer;
    }
  
    .navbar-menu.is-active {
      display: block;
      width: 100%;
    }
  }
  </style>
  