<template>
    <ion-content class="content"> 
        <div class="outer-container">
            <div class="inner-container">
                <button class="login-button">Login</button>
                <div class="container-2">
                    <div class="text-container">
                        <h2 class="large-text">Megalabs</h2> 
                    </div>
                </div>
            </div>
        </div>
    </ion-content>
</template>

<script setup lang="ts">
import { IonContent } from '@ionic/vue';
</script>

<style scoped>
.content {
    background-color: white; 
    --ion-background-color: white; 
    height: 100vh; 
}

.outer-container {
    background-color: white; 
    padding: 1rem; 
    height: 100%;
}

.inner-container {
    background-color: rgb(0, 130, 125); 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    height: 100%; 
    gap: 1rem; 
    position: relative; 
    border-radius: 0.5rem; 
}

.container-2 {
    padding: clamp(0.5rem, 2vw, 1rem); 
    text-align: center; 
}

.text-container {
    display: flex;
    flex-direction: column; 
    align-items: center; 
}

.large-text {
    font-size: clamp(2rem, 5vw, 5rem);
    color: white; 
    margin: 0; 
    font-weight: bold;
}

.login-button {
    position: absolute; 
    top: clamp(10px, 2vw, 20px); 
    right: clamp(10px, 2vw, 20px); 
    background-color: #007bff;
    color: white; 
    border: none; 
    border-radius: 5px; 
    padding: clamp(8px, 1vw, 10px) clamp(15px, 2vw, 20px); 
    cursor: pointer; 
    font-size: clamp(0.875rem, 1.2vw, 1rem); 
}

.login-button:hover {
    background-color: #0056b3;
    transition: background-color 0.3s ease;
}

/* Media queries para ajustes específicos en diferentes tamaños de pantalla */
@media (max-width: 768px) {
    .outer-container {
        padding: 0.5rem;
    }
}

@media (min-width: 1200px) {
    .large-text {
        letter-spacing: 1px;
    }
}
</style>