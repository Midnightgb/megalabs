<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="flex min-h-screen items-center justify-center px-4">
        <div class="w-full max-w-md space-y-8">
          <!-- Logo container -->
          <div class="text-center">
            <img 
              src="@/assets/img/logo-megalabs-footer.png" 
              alt="Logo" 
              class="mx-auto h-24 w-auto"
            />
            <h1 class="mt-6 text-2xl font-bold tracking-tight text-gray-900">
              Bienvenido
            </h1>
            <p class="mt-2 text-sm text-gray-600">
              Inicia sesión para continuar
            </p>
          </div>

          <!-- Form container -->
          <div class="mt-8 space-y-6">
            <div class="space-y-4">
              <ion-item class="rounded-lg bg-gray-50">
                <ion-label position="floating" class="text-gray-700">
                  Email
                </ion-label>
                <ion-input 
                  type="email" 
                  v-model="email"
                  class="!mt-2"
                ></ion-input>
              </ion-item>

              <ion-item class="rounded-lg bg-gray-50">
                <ion-label position="floating" class="text-gray-700">
                  Contraseña
                </ion-label>
                <ion-input 
                  type="password" 
                  v-model="password"
                  class="!mt-2"
                ></ion-input>
              </ion-item>
            </div>

            <ion-button 
              expand="block" 
              @click="handleLogin"
              class="!mt-8 h-12 !font-semibold"
            >
              Iniciar Sesión
            </ion-button>

            <div class="flex flex-col items-center space-y-4">
              <a 
                href="#" 
                class="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                ¿Olvidaste tu contraseña?
              </a>
              <p class="text-sm text-gray-600">
                ¿No tienes cuenta? 
                <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                  Regístrate aquí
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Email:', email.value);
  console.log('Password:', password.value);
  router.push('/tabs/tab1');
};
</script>

<style>
/* Ajustes específicos para los componentes de Ionic */
ion-item {
  --background: transparent;
  --border-color: theme('colors.gray.200');
  --border-width: 1px;
  --border-radius: 0.5rem;
  --padding-start: 1rem;
  --padding-end: 1rem;
  margin-bottom: 1rem;
}

ion-button {
  --background: theme('colors.blue.600');
  --background-hover: theme('colors.blue.700');
  --border-radius: 0.5rem;
}

/* Asegurarse de que los inputs tengan el espaciado correcto */
ion-input {
  --padding-start: 0;
  --padding-top: 0.5rem;
  --padding-bottom: 0.5rem;
}
</style>
