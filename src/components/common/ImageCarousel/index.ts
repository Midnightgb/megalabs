export interface CarouselSlide {
  image: string;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  slides: CarouselSlide[];
  autoplay?: boolean | {
    delay: number;
    disableOnInteraction: boolean;
  };
}