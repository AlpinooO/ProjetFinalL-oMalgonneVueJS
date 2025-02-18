<template>
    <header class="navbar is-primary">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">Home</router-link>
            </div>
            <div class="navbar-menu">
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
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const route = useRoute();
const router = useRouter();
const isLoginPage = computed(() => route.path === '/login');

const store = useAuthStore() as any;

const handleDeconnexion = () => {
    router.push('/');
    store.isLogin.value = false;
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
</style>
