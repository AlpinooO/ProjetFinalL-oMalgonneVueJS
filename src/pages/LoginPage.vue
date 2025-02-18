<template>
    <main class="login_main">
        <h1>Login Page</h1>
        <form v-on:submit.prevent="submitHandler" class="form"> 
            <section>
                <article>
                    <label for="email"></label>
                    <input v-model="email"
                    id="email"
                    placeholder="Entrez votre email"
                    type="email"
                    class="input"
                    />
                </article>
            </section>
            <section>
                <article>
                    <label for="password"></label>
                    <input v-model="password"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    type="password"
                    class="input"
                    />
                </article>
            </section>
            <section>
                <button type="submit" class="button is-primary">Valider</button>
                <button type="reset" class="button is-danger">Annuler</button>
            </section>
        </form>
    </main>
</template>

<script lang="ts" setup>
import { watch, ref} from "vue";
import InputValidator from '../utils/input-validator';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('')
const password = ref('')

watch(email, (val) =>{
    console.log(val, InputValidator(val, 'email'));
})

watch(password,(val) =>{
    console.log(val, InputValidator(val, 'password'));
})

const submitHandler = async()=> {
    const result = await fetch('users.json');
    const users = await result.json();
    console.log(users);

    const user = users.find((user:{email: string, password: string})=> user.email === email.value)
    if (!user){
        alert('Utilisateur non trouvé');
        return;
    } 
    if (!(user.password === password.value)){
        alert('Mot de passe incorrect');
        return;
    }

    console.log('Utilisateur trouvé', user);
    authStore.user = user; 
    router.push('/panier'); 
}
</script>