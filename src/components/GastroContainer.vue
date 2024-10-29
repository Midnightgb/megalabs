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
import { getProductSlides } from '@/utils/productConfig';
import type { ProductName } from '@/utils/productConfig';
import ImageCarousel from '@/components/common/ImageCarousel/ImageCarousel.vue';

const props = defineProps<{
  initialProduct: ProductName;
  allProducts: ProductName[];
}>();

const formattedSlides = computed(() => {
  return props.allProducts.flatMap(productName => {
    const slides = getProductSlides(productName);
    return slides.map(slide => ({
      image: {
        src: slide.desktop.jpg,
        sources: [
          {
            srcset: slide.tablet.jpg,
            media: '(max-width: 768px)',
            type: 'image/jpeg'
          }
        ]
      }
    }));
  });
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
