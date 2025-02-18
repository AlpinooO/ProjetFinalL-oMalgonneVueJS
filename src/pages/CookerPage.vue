<template>
    <div>
        <h1>CookerPage</h1>
        <div v-if="chefs.length > 0">
            <div v-for="chef in chefs" :key="chef.id" class="chef-card">
                <img :src="chef.photo" alt="Chef photo" class="chef-photo"/>
                <h2>{{ chef.name }}</h2>
                <p>{{ chef.specialty }}</p>
                <router-link :to="'/cooker/' + chef.id" class="button is-link">Voir le chef</router-link>
            </div>
        </div>
        <div v-else>
            <p>No chefs found.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const chefs = ref<any[]>([]);

onMounted(async () => {
    try {
        const response = await fetch('/cookers.json');  
        chefs.value = await response.json();
    } catch (error) {
        console.error('Error loading chefs data:', error);
    }
});
</script>

<style scoped>
.chef-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.chef-photo {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>
