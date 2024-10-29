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
            @error="handleSourceError(source, index, sourceIndex)"
          />
          <source 
            :srcset="slide.image.srcset" 
            type="image/webp"
            @error="handleWebPError(slide, index)" 
          />
          <img 
            :src="slide.image.fallback" 
            :alt="slide.title || ''"
            class="absolute top-0 left-0 w-full h-full object-contain"
            @load="handleImageLoad(slide, index)"
            @error="handleImageError(slide, index)"
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
import { onMounted } from 'vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const props = withDefaults(defineProps<CarouselProps & { initialSlide?: number }>(), {
  autoplay: () => ({
    delay: 3000,
    disableOnInteraction: false
  }),
  initialSlide: 0
});

const modules = [Pagination, Navigation, Autoplay];

// Logging handlers
const handleSourceError = (source: any, slideIndex: number, sourceIndex: number) => {
  console.error(`[Carousel] Source loading error for slide ${slideIndex}, source ${sourceIndex}:`, {
    srcset: source.srcset,
    media: source.media,
    type: source.type
  });
};

const handleWebPError = (slide: any, index: number) => {
  console.error(`[Carousel] WebP format loading error for slide ${index}:`, {
    srcset: slide.image.srcset
  });
};

const handleImageLoad = (slide: any, index: number) => {
  console.log(`[Carousel] Successfully loaded image for slide ${index}:`, {
    src: slide.image.fallback,
    title: slide.title
  });
};

const handleImageError = (slide: any, index: number) => {
  console.error(`[Carousel] Fallback image loading error for slide ${index}:`, {
    src: slide.image.fallback,
    title: slide.title
  });
};

// Log initial props on mount
onMounted(() => {
  console.log('[Carousel] Initialized with props:', {
    slidesCount: props.slides.length,
    initialSlide: props.initialSlide,
    autoplay: props.autoplay
  });
});
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