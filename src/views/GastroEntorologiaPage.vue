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

const cards = ref([
  { title: "Tarjeta 1", image: "https://via.placeholder.com/150" },
  { title: "Tarjeta 2", image: "https://via.placeholder.com/150" },
  { title: "Tarjeta 3", image: "https://via.placeholder.com/150" },
  { title: "Tarjeta 4", image: "https://via.placeholder.com/150" },
  { title: "Tarjeta 5", image: "https://via.placeholder.com/150" },
  { title: "Tarjeta 6", image: "https://via.placeholder.com/150" },
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
  background-color: #d3d3d3;
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
  height: 60px; /* Altura reducida para la primera fila */
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
}

.second-row {
  background-color: #4a90e2;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres tarjetas por fila */
  gap: 10px; /* Espacio entre tarjetas */
  padding: 10px;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.title-container {
  background-color: #4CAF50; /* Color verde para el contenedor del título */
  padding: 5px; /* Espacio interno */
}

.card-title {
  margin: 0; /* Elimina márgenes del título */
  font-size: 14px;
  color: white; /* Color del texto del título */
  text-align: center; /* Centrar texto */
}
</style>
