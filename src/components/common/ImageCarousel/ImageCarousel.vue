<template>
  <swiper
    :space-between="30"
    :modules="modules"
    :slides-per-view="1"
    :autoplay="autoplay"
    :navigation="true"
    :initial-slide="initialSlide"
    :loop="true"
    class="w-full h-full"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="relative w-full h-full">
        <picture v-if="slide.image">
          <source
            v-for="(source, sourceIndex) in slide.image.sources"
            :key="sourceIndex"
            :srcset="source.srcset"
            :media="source.media"
            :type="source.type"
          />
          <source :srcset="slide.image.srcset" type="image/webp" />
          <img 
            :src="slide.image.fallback" 
            :alt="slide.title || ''"
            class="absolute top-0 left-0 w-full h-full object-contain"
          />
        </picture>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import type { CarouselProps } from './index';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

withDefaults(defineProps<CarouselProps & { initialSlide?: number }>(), {
  autoplay: () => ({
    delay: 3000,
    disableOnInteraction: false
  }),
  initialSlide: 0
});

const modules = [Pagination, Navigation, Autoplay];
</script>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
  background-color: theme('colors.blue.600');
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: theme('colors.blue.600');
}
</style>
