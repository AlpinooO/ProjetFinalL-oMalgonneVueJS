<template>
    <main class="login_main">
        <h1>Register Page</h1>
        <form v-on:submit.prevent="" class="form"> 
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
                    <label for="nom"></label>
                    <input v-model="nom"
                    id="nom"
                    placeholder="Entrez votre nom"
                    type="text"
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

const router = useRouter();



const email = ref('')
const nom = ref('')
const password = ref('')

watch(email, (val) =>{
    console.log(val,InputValidator(val, 'email'));
})

watch(nom, (val) =>{
    console.log(val,InputValidator(val, 'nom'));
})
watch(password,(val) =>{
    console.log(val,InputValidator(val, 'password'));
})


</script>
