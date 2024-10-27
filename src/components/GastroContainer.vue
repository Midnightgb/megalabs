<template>
  <ImageCarousel :slides="slides" :autoplay="false" :navigation="false"/>
</template>

<script setup lang="ts">
import { getProductSlides } from '@/utils/productConfig';
import type { ProductName } from '@/utils/productConfig';
import ImageCarousel from '@/components/common/ImageCarousel/ImageCarousel.vue';
import type { CarouselSlide } from '@/components/common/ImageCarousel/index';

const props = defineProps<{
  name: ProductName;
}>();

const slides: CarouselSlide[] = getProductSlides(props.name).map(slide => ({
  image: {
    srcset: `${slide.desktop.webp} 1x`,
    fallback: slide.desktop.jpg,
    sources: [
      {
        srcset: slide.tablet.webp,
        media: '(max-width: 768px)',
        type: 'image/webp'
      },
      {
        srcset: slide.tablet.jpg,
        media: '(max-width: 768px)',
        type: 'image/jpeg'
      }
    ]
  }
}));
</script>
