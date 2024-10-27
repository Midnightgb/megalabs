<template>
  <swiper
    :space-between="30"
    :modules="modules"
    :slides-per-view="1"
    :autoplay="autoplay"
    :navigation="true"
    class="w-full h-full"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="relative w-full h-full">
        <picture>
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
        <div 
          v-if="slide.title" 
          class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4"
        >
          <h3 class="text-lg font-semibold">{{ slide.title }}</h3>
          <p v-if="slide.description" class="text-sm">{{ slide.description }}</p>
        </div>
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

const swiperBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 30
  }
}

const getResponsiveImage = (slide: CarouselProps['slides'][number]) => {
  if(window.innerWidth < 1024) return slide.image;
  if(window.innerWidth < 768) return slide.image;
  return slide.image;
}

withDefaults(defineProps<CarouselProps>(), {
  autoplay: () => ({
    delay: 3000,
    disableOnInteraction: false
  })
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
