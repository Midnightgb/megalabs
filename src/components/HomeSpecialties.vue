<template>
    <ion-content class="content"> 
        <div class="outer-container">
            <div class="inner-container">
                <div class="container-2">
                    <div class="text-container">
                        <h2 class="large-text">Megalabs</h2> 
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
                @click="handleCardClick(card.title)">
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

const cards = [
    { title: 'DOLOR', image: dolorImg },
    { title: 'GASTRO', image: gastroImg },
    { title: 'GINECO - UROLOGIA', image: urologiaImg },
    { title: 'PEDIATRA - RESPIRATORIA', image: respirarImg },
    { title: 'DERMATOLOGIA', image: dermaImg },
    { title: 'HIDRISAGE', image: hidrisageImg },
    { title: 'OFTAMOLOGIA', image: oftamologiaImg },
    { title: 'MEDICINA GENERAL', image: medicinaImg },
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

const handleCardClick = (title: string) => {
    if (title === 'GASTRO') {
        console.log('Gastro');
    }
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
  padding: 16px; 
}

.inner-container {
  background-color: rgb(0, 130, 125); 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  height: 100%; 
  gap: 16px; 
  position: relative; 
}

.container-2 {
  padding: 10px; 
  text-align: center; 
}

.text-container {
  display: flex;
  flex-direction: column; 
  align-items: center; 
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
}

@media (max-width: 580px) {
  .card {
    width: calc(50% - 16px); 
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }
}

</style>

