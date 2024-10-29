<template>
  <div id="container">
    <ImageCarousel 
      :slides="formattedSlides" 
      :autoplay="false" 
      :navigation="false"
      :initial-slide="getInitialSlideIndex()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getProductSlides } from '@/utils/cloudinaryConfig';
import type { ProductName } from '@/utils/cloudinaryConfig';
import ImageCarousel from '@/components/common/ImageCarousel/ImageCarousel.vue';
import type { CarouselSlide } from '@/components/common/ImageCarousel';

const props = defineProps<{
  initialProduct: ProductName;
  allProducts: ProductName[];
}>();

const formattedSlides = computed<CarouselSlide[]>(() => {
  return props.allProducts.flatMap(productName => getProductSlides(productName));
});

const getInitialSlideIndex = () => {
  let index = 0;
  for (const product of props.allProducts) {
    if (product === props.initialProduct) {
      return index;
    }
    index += getProductSlides(product).length;
  }
  return 0;
};



</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>