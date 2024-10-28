<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-content-fullscreen">
      <div class="bg-img">
        <div class="logo-container">
          <img src="@img/gastroHome/lineagastro.png" alt="GastroHome" class="logo">
        </div>
        <div class="button-container">
          <button 
            v-for="button in buttonimgs" 
            :key="button.alt" 
            class="img-btn"
            @click="handleButtonClick(button)"
          >
            <img :src="button.img" :alt="button.alt" class="button-image">
          </button>
        </div>
      </div>
      
      <Transition name="fade">
        <div v-if="selectedProduct" class="overlay">
            <button class="close-btn" @click="closeOverlay" aria-label="Cerrar">×</button>
            <GastroContainer 
              :key="selectedProduct" 
              :name="selectedProduct" 
            />
        </div>
      </Transition>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import GastroContainer from '@/components/GastroContainer.vue';
import { ref } from 'vue';

interface ButtonsImg {
  img: string;
  alt: string;
}

import dexgstrol from '@img/gastroHome/dexgstrol.png';
import sansflu from '@img/gastroHome/sansflu.png';
import pregesix from '@img/gastroHome/pregesix.png';
import lunarium from '@img/gastroHome/lunarium.png';
import combispas from '@img/gastroHome/combispas.png';
import kirruz from '@img/gastroHome/kirruz.png';
import neocholal from '@img/gastroHome/neocholal.png';
import enterex from '@img/gastroHome/enterex.png';
import lactipan from '@img/gastroHome/lactipan.png';
import glutapak from '@img/gastroHome/glutapak.png';
import phlebodia from '@img/gastroHome/phlebodia.png';
import productos from '@img/gastroHome/productos.png';

const buttonimgs: ButtonsImg[] = [
  { alt: 'dexgstrol', img: dexgstrol },
  { alt: 'sansflu', img: sansflu },
  { alt: 'pregesix', img: pregesix },
  { alt: 'lunarium', img: lunarium },
  { alt: 'combispas', img: combispas },
  { alt: 'kirruiz', img: kirruz },
  { alt: 'neocholal-s', img: neocholal },
  { alt: 'enterex', img: enterex },
  { alt: 'lactipan', img: lactipan },
  { alt: 'glutapak', img: glutapak },
  { alt: 'phlebodia', img: phlebodia },
  { alt: 'productos', img: productos },
];

const selectedProduct = ref<string | null>(null);

const handleButtonClick = (button: ButtonsImg) => {
  if (button.alt === "productos") {
    console.log("productos no se puede seleccionar");
    selectedProduct.value = null;
    return;
  }
  selectedProduct.value = button.alt;
};

const closeOverlay = () => {
  selectedProduct.value = null;
};
</script>

<style scoped>
.bg-img {
  background-color: #fafbfd;
  background-image: url('@img/general/desktop/webp/BOOK GAS 0924-2_page78_image1.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
}

.logo-container {
  position: absolute;
  top: 60px;
  left: 50px;
  width: 15%;
  z-index: 1;
}

.logo {
  width: 100%;
  height: auto;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 60px 40px;
  margin-left: auto;
  gap: 1rem;
  height: 100vh;
  overflow-y: auto;
  /* Añadir estas propiedades */
  position: relative;
  z-index: 2;
  width: auto;
}

.img-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s ease;
  width: 16rem;
  display: block;
  position: relative;
}

.img-btn:hover {
  transform: scale(1.05);
}

.button-image {
  width: 100%;
  height: auto;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: block;
  object-fit: contain;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.overlay-content {
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1001;
}

.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Asegura que el scroll funcione correctamente en dispositivos móviles */
@media (max-width: 768px) {
  .button-container {
    padding: 40px 20px;
  }

  .img-btn {
    width: 12rem;
  }

  .overlay-content {
    width: 95%;
    padding: 1.5rem;
  }

  .logo-container {
    width: 25%;
    top: 30px;
    left: 30px;
  }
}
</style>
