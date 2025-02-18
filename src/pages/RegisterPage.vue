<template>
    <div class="register-page container">
      <h2 class="title is-3 has-text-centered">Inscription</h2>
      <form @submit.prevent="register" class="box">
        <div class="field">
          <label class="label">Nom</label>
          <div class="control">
            <input v-model="user.name" class="input" type="text" placeholder="Nom" required />
          </div>
        </div>
        
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="user.email" class="input" type="email" placeholder="Email" required />
          </div>
        </div>
        
        <div class="field">
          <label class="label">Mot de passe</label>
          <div class="control">
            <input v-model="user.password" class="input" type="password" placeholder="Mot de passe" required />
          </div>
        </div>
        
        <div class="control">
          <button class="button is-primary" type="submit">S'inscrire</button>
        </div>
      </form>
      <p class="has-text-centered">Déjà un compte ? <router-link to="/login" class="has-text-link">Connectez-vous</router-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';
  
  const router = useRouter();
  const authStore = useAuthStore();
  const user = ref({ name: '', email: '', password: '' });
  
  const register = async () => {
    await authStore.register(user.value);
    router.push('/');
  };
  </script>
  