<template>
    <ion-content class="content"> 
        <div class="outer-container">
            <div class="inner-container">
                <div class="container1">
                    <button class="btn-salir" @click="handleSignOut">Sign out</button>
                </div>
                <div class="container-2">
                    <div class="text-container">
                        <img src="@/assets/img/megalabs_logo.svg" alt="logo-megalabs" class="brightness-0 invert">
                    </div>
                </div>
            </div>
        </div>
        <div class="card-container">
            <ion-card 
                v-for="(card, index) in cards" 
                :key="index" 
                class="card" 
                :class="{ 'gastro-card': card.title === 'GASTRO' }" 
                @click="handleCardClick(card)">
                <ion-card-header>
                    <div 
                        class="circular-container" 
                        :style="{ borderColor: circleColors[index] }"
                    >
                        <div class="circular-image-container">
                            <img :src="card.image" alt="imagen" class="card-image" />
                        </div>
                    </div>
                </ion-card-header>
                <ion-card-content class="card-content">
                    <h3 class="card-title">{{ card.title }}</h3>
                </ion-card-content>
            </ion-card>
        </div>
    </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonCard, IonCardHeader, IonCardContent } from '@ionic/vue';
import { useRouter } from 'vue-router';

import gastroImg from '@img/gastro.jpeg';
import dolorImg from '@img/dolor.jpeg';
import urologiaImg from '@img/urologia.jpeg';
import respirarImg from '@img/respirar.jpeg';
import dermaImg from '@img/derma.jpeg';
import hidrisageImg from '@img/hidri.jpeg';
import oftamologiaImg from '@img/oftamologia.jpeg';
import medicinaImg from '@img/medicina.jpeg';

const router = useRouter();

interface Card {
  title: string;
  image: string;
  path?: string;
}

const cards: Card[] = [
    { title: 'DOLOR', image: dolorImg, path: '/home/dolor' },
    { title: 'GASTRO', image: gastroImg, path: '/home/gastro' },
    { title: 'GINECO - UROLOGIA', image: urologiaImg, path: '/home/urologia' },
    { title: 'PEDIATRA - RESPIRATORIA', image: respirarImg, path: '/home/respiratoria' },
    { title: 'DERMATOLOGIA', image: dermaImg, path: '/home/dermatologia' },
    { title: 'HIDRISAGE', image: hidrisageImg, path: '/home/hidrisage' },
    { title: 'OFTAMOLOGIA', image: oftamologiaImg, path: '/home/oftamologia' },
    { title: 'MEDICINA GENERAL', image: medicinaImg, path: '/home/medicina' },
];

const circleColors = [
    'rgb(235, 57, 27)',
    'rgb(16, 53, 136)',
    'rgb(159, 250, 255)',
    'rgb(8, 73, 132)',
    'rgb(239, 192, 163)',
    'rgb(146, 107, 0)',
    'rgb(202, 159, 143)',
    'rgb(193, 201, 214)',
];

const handleCardClick = (card: Card) => {
    if (card.path) {
        router.push(card.path);
    }
};

const handleSignOut = () => {
    console.log('CERRAR SESION');
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
}

.btn-salir {
    padding: 10px 70px;
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
}

.container-2 {
  padding-bottom: 10px;
  text-align: center; 
}

.text-container {
  display: flex;
  flex-direction: column; 
  align-items: center;
  min-height: 50px; /* Añadir altura mínima */
}

.text-container img {
  width: 200px; /* O el tamaño que necesites */
  height: auto;
}

.large-text {
  font-size: 5vw; 
  color: white; 
  margin: 0; 
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
}

.card-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 10px;
  padding: 16px;
}

.card {
  width: calc(22% - 16px); 
  margin-bottom: 16px; 
  background-color: white;
  box-shadow: none;
}

.card-image {
  width: 100%; 
  height: auto; 
}

.circular-container {
  width: 160px; 
  height: 160px; 
  border-radius: 50%; 
  border: 3px solid rgb(0, 130, 125);
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: 0 auto; 
  padding: 8px; 
  box-sizing: border-box; 
}

.circular-image-container {
  width: 100%; 
  height: 100%; 
  border-radius: 50%; 
  overflow: hidden; 
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.circular-image-container img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.card-content {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  text-align: center; 
}

.card-title {
  margin: 0; 
  font-size: 1.2em; 
  color: #00827d;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
}

/* Media Queries */
@media (min-width: 1025px) {
  .gastro-card {
    cursor: pointer; 
  }
}

@media (max-width: 1024px) {
  .card {
    width: calc(25% - 16px);
  }
}

@media (max-width: 768px) {
  .card {
    width: calc(33% - 16px); 
  }

  .large-text {
    font-size: 50px; /* Aumentado para pantallas medianas */
  }
}

@media (max-width: 580px) {
  .outer-container {
    padding: 0;
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

  .large-text {
    font-size: 28px; /* Aumentado desde 24px a 28px */
  }

  .container-2 {
    order: 1;
    padding-bottom: 0;
    text-align: left;
  }

  .text-container {
    align-items: flex-start;
  }

  .large-text {
    font-size: 30px;
  }

  .btn-salir {
    padding: 4px 15px;
    font-size: 16px;
    border-radius: 0;   
  }

  .card {
    width: calc(50% - 16px);
  }

  .circular-container {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }
}
</style>