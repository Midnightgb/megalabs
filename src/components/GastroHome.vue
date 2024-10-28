<template>
  <ion-page>
    <ion-content>
      <div class="main-container">
        <div class="side-bar">
          <div class="logo-container">
            <img src="@img/gastroHome/lineagastro.png" alt="Logo" class="logo" />
          </div>

          <div class="button-container">
            <ion-button class="promo-button">
              Guias de Promocion
            </ion-button>
          </div>
        </div>

        <div class="content-area">
          <div class="row first-row">
            <div class="first-row-content">
              <ion-button  class="right-button" >
                <img src="@img/gastroHome/dexgstrol.png" alt="dexgstron" />
              </ion-button>
            </div>
          </div>

          <div class="row second-row">
            <div class="cards-grid">
              <div v-for="(card, index) in cards" :key="index" class="card">
                <img :src="card.image" :alt="card.title" class="card-image" />
                <div class="title-container">
                  <h4 class="card-title">{{ card.title }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import gastro from '@img/gastroSpecialties/gastro.jpg';
import internista from '@img/gastroSpecialties/internistav2.png';
import medicinaGeneral from '@img/gastroSpecialties/medicinageneral.jpeg';
import cirujano from '@img/gastroSpecialties/cirujano.jpeg';
import geriatra from '@img/gastroSpecialties/geriatra.jpg';
import vitamedica from '@img/gastroSpecialties/vitamedica.jpg';

const cards = ref([
  { title: "Gastroenterologia", image: gastro },
  { title: "Internista", image: internista },
  { title: "Medicina General", image: medicinaGeneral },
  { title: "Cirujano", image: cirujano },
  { title: "Geriatra", image: geriatra },
  { title: "Vita Medica", image: vitamedica },
]);
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;/*  ESTPO PUEDE QUE UIZAS DAÑE EL DISEÑO */
  background-image: url('@img/gastroSpecialties/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.side-bar {
  background-color: rgba(255, 255, 255, 0.726);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 150px;
  height: auto;
}

.button-container {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.promo-button {
  --background: #00837c;
  --color: white;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.row {
  padding: 5px;
}

.first-row-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.right-button {
  --background: white;
  --box-shadow: none;
  --border-radius: 0;
  --padding-start: 0;
  --padding-end: 0;
  width: 30%;
  margin-right: 80px;
}

.right-button img {
  height: 100%;
}

.second-row {
  background-color: transparent;
  height: 100vh;
  padding: 10px 5rem;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 2.5rem; 
}

.card {
  background-color: white;
  text-align: left;
  padding: 0;
  width: 180px;
  height: 255px; /* Altura fija para todas las tarjetas */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden; /* Para asegurar que la imagen no se salga de la tarjeta */
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.card-image {
  width: 100%;
  height: 250px; /* Altura fija para todas las imágenes */
  object-fit: cover; /* Esto hará que la imagen cubra el área sin distorsionarse */
  object-position: center; /* Centra la imagen */
}

.title-container {
  background-color: rgb(0, 131, 124); 
  padding: 5px; 
  text-align: right; 
  margin-top: 0;
  z-index: 3; /* Para que la imagen se vea sobre la tarjeta */
}

.card-title {
  margin: 0; 
  font-size: 14px;
  color: white; 
}

</style>
