<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-content-fullscreen">
      <router-view />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
</script>

