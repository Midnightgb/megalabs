<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="padding-all centered-container">
        <img src="@/assets/img/logo-megalabs-green.png" alt="Logo" class="my-8">
        <h1><strong></strong>Bienvenido</h1>
        <h3>Inicia sesión para continuar</h3>
        <div class="credentials-incorrect" v-if="credentialsIncorrect">
          <h5>Contraseña incorrecta</h5>
          <p>Por favor, comprueba tus credenciales e intenta nuevamente.</p>
        </div>
        <form @submit.prevent="handleLogin">
          <InputComponent label="Correo electrónico" type="text" v-model="email"/>
          <InputComponent label="Contraseña" type="password" v-model="password"/>
          <a href="#" class="forgot-password-link">¿Olvidaste tu contraseña?</a>
          <ion-button expand="block" color="success" type="submit" >Iniciar Sesión</ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { ref } from 'vue';



const credentialsIncorrect = ref(false);
const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Aquí iría la lógica de inicio de sesión
  if (email.value === 'tinta' && password.value === 'tinta') {
    console.log('Login attempt', { email: email.value, password: password.value });
    alert('Login exitoso'); // Aquí se puede hacer el login real
  }else{
    credentialsIncorrect.value = true;
  }
    
};

import InputComponent from '@/components/InputComponent.vue';
</script>

<style lang="scss" scoped>
ion-content {
  --background: #ffff;
}

* {
  margin: 0;
  padding: 0;
}

.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
}

.padding-all {
  max-width: 500px;
  width: 90%;
}


h1 {
  margin-top: 2rem;
  margin-bottom: 15px;
  font-size: 36px;
  font-weight: 700;
  color: black;
}

h3 {
  color: #5a5a5a;
  font-weight: 600;
  font-size: 18px;
}

form {
  margin-top: 2rem;
  width: 100%;
  .forgot-password-link {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    text-align: right;
    font-weight: 100;
    font-size: 13px;
    margin-bottom: 1rem;
    color: #4a4a4a;
  }
}

.credentials-incorrect{
  background-color: #ffe3e2;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 10px;
  border: 2px solid #ff8a80;
  margin-top: 0.5rem;
  width: 100%;

  h5 {
    color: #555d65;
    font-weight: 600;
    font-size: 18px;
  }
  p{
    color: #555d65;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0;
  }
} 
</style>