<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" v-model="email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>

        <ion-button expand="block" class="ion-margin-top" @click="handleLogin">
          Iniciar Sesión
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Email:', email.value);
  console.log('Password:', password.value);
  // Aquí iría la lógica de login
  
  // Redirigimos a la primera tab
  router.push('/tabs/tab1');
};
</script>
