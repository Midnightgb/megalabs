export interface CarouselSlide {
  image: {
    srcset: string;
    fallback: string;
    sources: {
      srcset: string;
      media: string;
      type: string;
    }[];
  };
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
