import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async register(userData) {

      this.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
    },
    async login(credentials) {

      const storedUser = JSON.parse(localStorage.getItem('user'));
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
  },
});
