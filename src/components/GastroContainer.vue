<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <ImageCarousel :slides="slides" :autoplay="false" :navigation="false"/>
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '@/components/common/ImageCarousel/ImageCarousel.vue';
import type { CarouselSlide } from '@/components/common/ImageCarousel';
/* import imageDesktop from'@gastro-desktop/webp/BOOK GAS 0924-2_page78_image8.webp'
import imageTablet from '@gastro-tablet/webp/BOOK GAS 0924-2_page78_image8.webp'
 */

const slides: CarouselSlide[] = [
/*   {
    image: imageDesktop,
  },
  {
    image: imageTablet,
  },
  {
    image: imageDesktop,
  } */
];

defineProps({
  name: String,
});


</script>

