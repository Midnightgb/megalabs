<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-content-fullscreen">
      <div class="bg-img">
        <div class="button-container">
          <button 
            v-for="button in buttonimgs" 
            :key="button.alt" 
            class="img-btn"
            @click="handleButtonClick(button)"
          >
            <img :src="button.img" :alt="button.alt">
          </button>
        </div>
        <div class="align-start-item">
          <img src="@img/gastroHome/lineagastro.png" alt="GastroHome">
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface ButtonsImg{
  img: string;
  alt: string;
  path?: string;
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
    { alt: 'dexgstrol', img: dexgstrol, path: '/home/gastro/dexgstrol' },
    { alt: 'sansflu', img: sansflu, path: '/home/gastro/sansflu' },
    { alt: 'pregesix', img: pregesix, path: '/home/gastro/pregesix' },
    { alt: 'lunarium', img: lunarium, path: '/home/gastro/lunarium' },
    { alt: 'combispas', img: combispas, path: '/home/gastro/combispas' },
    { alt: 'kirruz', img: kirruz, path: '/home/gastro/kirruz' },
    { alt: 'neocholal', img: neocholal, path: '/home/gastro/neocholal' },
    { alt: 'enterex', img: enterex, path: '/home/gastro/enterex' },
    { alt: 'lactipan', img: lactipan, path: '/home/gastro/lactipan' },
    { alt: 'glutapak', img: glutapak, path: '/home/gastro/glutapak' },
    { alt: 'phlebodia', img: phlebodia, path: '/home/gastro/phlebodia' },
    { alt: 'productos', img: productos, path: '/home/gastro/productos' },
];

const handleButtonClick = (button: ButtonsImg) => {
  if (button.path) {
    console.log(button.path);
    router.push(button.path);
  }
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
  .img-btn{
    width: 100%;
    max-width: 16rem; 
    margin-bottom: 1rem;
    box-shadow: 0px 5px 5px rgb(179, 179, 179);
  }
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 60px 40px;
  min-height: 100vh;
  box-sizing: border-box; 
}

.align-start-item {
  margin: 60px 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 15%;
}
</style>