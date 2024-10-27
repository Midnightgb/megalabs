<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <GastroContainer name="dexgstrol" />
<!--       <GastroContainer name="sansflu" />
      <GastroContainer name="pregesix" />
      <GastroContainer name="lunarium" />
      <GastroContainer name="combispas" />
      <GastroContainer name="kirruiz" />
      <GastroContainer name="neocholal-s" />
      <GastroContainer name="enterex" />
      <GastroContainer name="lactipan" />
      <GastroContainer name="glutapak" />
      <GastroContainer name="phlebodia" /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import GastroContainer from '@/components/GastroContainer.vue';
</script>
