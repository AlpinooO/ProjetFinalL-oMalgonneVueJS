<template>
    <header>
        <nav>
            <ul><li>
                <router-link to="/">Home</router-link>
            </li>
            </ul>
            <ul>            <li>
                <router-link to="/cooker">Cooker</router-link>
            </li></ul>
            <ul>           
            <li>
                <router-link to="/login">Login</router-link>
            </li>
        </ul>
            <ul>
            <li>
                <router-link to="/register">Register</router-link>
            </li>
        </ul>
        <ul>
            <li>
                <a v-on:click="handleDeconnexion">Déconnexion</a>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="/panier">Panier</router-link>
            </li>
        </ul>
        </nav>
    </header>


</template>

<script setup lang="ts">
import { computed } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import { useAuthStore } from '../stores/auth';
const route = useRoute();
const router = useRouter();
const isLoginPage = computed(() => route.path === '/login')

const store = useAuthStore() as any;



const handleDeconnexion = () => {
    router.push('/')
    store.isLogin.value = false;
}</script>
