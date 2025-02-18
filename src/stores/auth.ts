// src/stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,  
  }),
  actions: {
    async login(credentials: { email: string; password: string }) {
      const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
      if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
        this.user = storedUser;  
      } else {
        throw new Error('Identifiants incorrects');
      }
    },
    
    logout() {
      this.user = null;  
      localStorage.removeItem('user');  
    },

    async register(userData: { email: string; password: string }) {
      this.user = userData;  
      localStorage.setItem('user', JSON.stringify(userData)); 
    },
  },
});
