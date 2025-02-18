<template>
    <div class="login-page container">
      <h2 class="title is-3 has-text-centered">Connexion</h2>
      <form @submit.prevent="login" class="box">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="credentials.email" class="input" type="email" placeholder="Email" required />
          </div>
        </div>
        
        <div class="field">
          <label class="label">Mot de passe</label>
          <div class="control">
            <input v-model="credentials.password" class="input" type="password" placeholder="Mot de passe" required />
          </div>
        </div>
        
        <div class="control">
          <button class="button is-primary" type="submit">Se connecter</button>
        </div>
      </form>
      <p class="has-text-centered">Pas encore inscrit ? <router-link to="/register" class="has-text-link">Inscrivez-vous</router-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';
  
  const router = useRouter();
  const authStore = useAuthStore();
  const credentials = ref({ email: '', password: '' });
  
  const login = async () => {
    await authStore.login(credentials.value);
    router.push('/');
  };
  </script>
  