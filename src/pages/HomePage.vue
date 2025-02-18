<template>
    <main class="home-page">
      <section class="hero is-medium is-primary">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">La Cuisine Maison</h1>
            <p class="subtitle">Savourez des plats faits maison, préparés avec amour et des ingrédients frais.</p>
          </div>
        </div>
      </section>
  
      <section class="section">
        <div class="container">
          <h2 class="title is-3 has-text-centered">Pourquoi Choisir la Cuisine Maison ?</h2>
          <div class="columns">
            <div class="column">
              <h3 class="subtitle is-4">Ingrédients Frais</h3>
              <p>Nous utilisons uniquement des produits frais, locaux et de saison pour garantir une qualité et un goût exceptionnels dans chaque plat.</p>
            </div>
            <div class="column">
              <h3 class="subtitle is-4">Préparation Soignée</h3>
              <p>Nos cuisiniers prennent soin de chaque étape de la préparation pour vous offrir une expérience culinaire unique et savoureuse.</p>
            </div>
            <div class="column">
              <h3 class="subtitle is-4">Saveurs Authentiques</h3>
              <p>Nos plats sont inspirés des recettes traditionnelles, revisitées avec une touche moderne pour une explosion de saveurs.</p>
            </div>
          </div>
        </div>
      </section>
  
      <section class="section has-background-light">
        <div class="container">
          <h2 class="title is-3 has-text-centered">Ce Que Disent Nos Clients</h2>
          <div class="columns is-centered">
            <div class="column is-half">
              <div class="box">
                <p class="has-text-centered"><em>"La meilleure expérience culinaire que j'ai eue ! Tout est tellement frais et délicieux. Je reviendrai certainement."</em></p>
                <p class="has-text-right"><strong>- Marie D.</strong></p>
              </div>
            </div>
            <div class="column is-half">
              <div class="box">
                <p class="has-text-centered"><em>"J'adore l'idée de soutenir les cuisiniers locaux tout en dégustant des plats incroyablement bons. C'est un vrai régal à chaque commande !"</em></p>
                <p class="has-text-right"><strong>- Jacques L.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="section has-background-primary">
        <div class="container has-text-centered">
          <h2 class="title is-3 has-text-white">Prêt à Savourer le Meilleur de la Cuisine Maison ?</h2>
          <p class="subtitle is-4 has-text-white">Rejoignez-nous dès aujourd'hui et explorez un monde de saveurs authentiques faites maison !</p>
          <router-link to="/cooker" class="button is-light is-large">Découvrez Nos Cuisiniers</router-link>
        </div>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .home-page {
    padding: 20px;
  }
  
  .hero {
    background-image: url('https://via.placeholder.com/1920x600?text=Cuisine+Maison'); 
    background-size: cover;
    color: white;
  }
  
  .section {
    padding: 50px 0;
  }
  
  .has-background-primary {
    background-color: #00d1b2;
  }
  
  .has-background-light {
    background-color: #f4f4f4;
  }
  
  .title {
    font-weight: bold;
  }
  
  .subtitle {
    font-weight: normal;
  }
  
  .box {
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .button.is-light {
    background-color: white;
    color: #00d1b2;
    border: 2px solid #00d1b2;
  }
  </style>
  