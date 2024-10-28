<template>
  <ion-content class="content">
    <div class="outer-container">
      <div class="inner-container">
        <div class="container1">
          <button class="btn-salir" @click="handleSignOut">Sign out</button>
        </div>
        <div class="container-2">
          <div class="text-container">
            <img
              src="@/assets/img/megalabs_logo.svg"
              alt="logo-megalabs"
              class="brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="cards-grid">
      <div v-for="(card, index) in cards" :key="index" class="specialty-card">
        <ion-card-header class="p-0">
          <div
            class="circular-container cursor-pointer"
            @click="handleCardClick(card)"
            :style="{ borderColor: circleColors[index] }"
          >
            <div class="circular-image-container" :style="{ borderColor: circleColors[index] }">
              <img :src="card.image" :alt="card.title" class="card-image" />
            </div>
          </div>
        </ion-card-header>
        <ion-card-content class="card-content">
          <h3 class="card-title">{{ card.title }}</h3>
        </ion-card-content>
      </div>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonCardHeader, IonCardContent } from "@ionic/vue";
import { useRouter } from "vue-router";

import gastroImg from "@/assets/img/icons/gastro.png";
import dolorImg from "@/assets/img/icons/dolor.png";
import urologiaImg from "@/assets/img/icons/urologia-ginecologia.png";
import respirarImg from "@/assets/img/icons/pediatria-neumologia.png";
import dermaImg from "@/assets/img/icons/dermatologia.png";
import hidrisageImg from "@/assets/img/icons/hidrisage.png";
import oftamologiaImg from "@/assets/img/icons/oftamologia.png";
import medicinaImg from "@/assets/img/icons/medgeneral.png";

const router = useRouter();

interface Card {
  title: string;
  image: string;
  path?: string;
}

const cards: Card[] = [
  { title: "DOLOR", image: dolorImg, path: "/home/dolor" },
  { title: "GASTRO", image: gastroImg, path: "/home/gastro" },
  { title: "GINECO - UROLOGIA", image: urologiaImg, path: "/home/urologia" },
  { title: "PEDIATRA - RESPIRATORIA", image: respirarImg, path: "/home/respiratoria", },
  { title: "DERMATOLOGIA", image: dermaImg, path: "/home/dermatologia" },
  { title: "HIDRISAGE", image: hidrisageImg, path: "/home/hidrisage" },
  { title: "OFTAMOLOGIA", image: oftamologiaImg, path: "/home/oftamologia" },
  { title: "MEDICINA GENERAL", image: medicinaImg, path: "/home/medicina" },
];

const circleColors = [
  "rgb(41, 171, 226)",    // Azul claro (Dolor)
  "rgb(0, 113, 188)",     // Azul medio (Gastro)
  "rgb(236, 0, 140)",     // Rosa (Gineco-Urología)
  "rgb(114, 143, 206)",   // Azul grisáceo (Pediatría-Respiratoria)
  "rgb(0, 150, 136)",     // Verde azulado (Dermatología)
  "rgb(212, 175, 55)",    // Dorado (Hidrisage)
  "rgb(0, 123, 195)",     // Azul brillante (Oftalmología)
  "rgb(255, 103, 31)",    // Naranja (Medicina General)
];

const handleCardClick = (card: Card) => {
  if (card.path) {
    router.push(card.path);
  }
};

const handleSignOut = () => {
  console.log("CERRAR SESION");
  router.push("/login");
};
</script>

<style scoped>
.content {
  background-color: white;
  --ion-background-color: white;
  height: 100%;
}

.outer-container {
  background-color: white;
  height: 20%;
}

.inner-container {
  background-color: rgb(0, 130, 125);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

.container1 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
}

.btn-salir {
  padding: 10px 55px;
  background-color: white;
  color: rgb(0, 130, 125);
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 0;
}

.container-2 {
  padding-bottom: 10px;
  text-align: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
}

.text-container img {
  width: 400px !important;
  height: auto;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.specialty-card {
  overflow: hidden;
  transition: transform 0.2s ease;
  margin: 0;
}

.circular-container {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid;
  margin: 1rem auto;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circular-image-container {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 3px solid;
}

.circular-image-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: inset 0 0 10px 8px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.card-title {
  margin: 0;
  font-size: 1.2em;
  color: #00827d;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Media Queries */
@media (max-width: 1200px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .btn-salir {
    padding: 8px 45 px;
  }
}

@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .text-container img {
    width: 400px !important;
    margin-top: 20px;
  }
}

@media (max-width: 580px) {
  .outer-container {
    padding: 0;
    height: auto;
  }

  .inner-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    height: auto;
  }

  .container1 {
    order: 2;
    width: auto;
  }

  .text-container img {
    width: 200px !important;
    margin-top: 0;
  }

  .container-2 {
    order: 1;
    padding-bottom: 0;
    text-align: left;
  }

  .text-container {
    align-items: flex-start;
  }

  .btn-salir {
    padding: 4px 18px;
    font-size: 16px;
    border-radius: 0;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  .circular-container {
    width: 120px;
    height: 120px;
  }
}

</style>
