<template>
  <ion-page>
    <ion-content>
      <div class="main-container">
        <div class="side-bar">
          <div class="logo-container">
            <img src="@img/gastroHome/lineagastro.png" alt="Logo" class="logo" />
          </div>

          <div class="button-container">
            <ion-button expand="full" color="primary" class="promo-button">
              Guía de Promoción
            </ion-button>
          </div>
        </div>

        <div class="content-area">
          <div class="row first-row">
            <div class="first-row-content">
              <p>Primera Fila</p>
              <ion-button color="success" class="right-button">
                Botón Derecha
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
import internista from '@img/gastroSpecialties/internista.jpg';
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
  height: 100vh;
  background-color: white;
}

.side-bar {
  width: 250px;
  background-color: rgba(4, 0, 0, 0.1);
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
  width: 100%;
  background-color: rgb(0, 131, 124);
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.row {
  padding: 20px;
}

.first-row {
  height: 60px;
  background-color: #ff6f61;
}

.first-row-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.right-button {
  margin-left: auto;
  background-color: rgb(0, 131, 124);
}

.second-row {
  background-color: #4a90e2;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Auto ajuste */
  gap: 10px; /* Espacio entre tarjetas */
  padding: 10px;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  max-height: 150px; /* Altura máxima para la imagen */
}

.title-container {
  background-color: rgb(0, 131, 124);
  padding: 5px;
  text-align: right;
  margin-top: 0;
  border-radius: 0 0 5px 5px; 
}

.card-title {
  margin: 0;
  font-size: 14px;
  color: white;
}

/* Media Queries para ajustar el diseño en pantallas pequeñas */
@media (max-width: 768px) {
  .side-bar {
    width: 200px; /* Ajustar ancho de la barra lateral */
  }
  
  .card {
    margin: 0; /* Asegurarse que las tarjetas no tengan margen extra */
  }
}

@media (max-width: 480px) {
  .side-bar {
    width: 100px; /* Ajustar ancho de la barra lateral */
  }

  .card {
    font-size: 12px; /* Ajustar tamaño de texto */
  }
}
</style>
