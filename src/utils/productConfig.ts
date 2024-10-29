// Importar solo las imágenes JPG
const images = {
  desktop: {
    jpg: import.meta.glob('@/assets/img/**/*.jpg', { eager: true })
  },
  tablet: {
    jpg: import.meta.glob('@/assets/img/**/*.jpg', { eager: true })
  }
};

export interface ProductRange {
  line: ProductLine;
  range: readonly [number, number];
  extra?: readonly number[];
}

export const productRanges: Record<string, ProductRange> = {
  dexgstrol: { line: 'gastro', range: [8, 15] },
  sansflu: { line: 'gastro', range: [16, 20], extra: [177] },
  pregesix: { line: 'gastro', range: [21, 28] },
  lunarium: { line: 'gastro', range: [29, 33], extra: [179] },
  combispas: { line: 'gastro', range: [34, 38], extra: [181] },
  kirruiz: { line: 'gastro', range: [39, 43], extra: [183] },
  'neocholal-s': { line: 'gastro', range: [44, 52], extra: [185] },
  enterex: { line: 'gastro', range: [53, 59] },
  lactipan: { line: 'gastro', range: [60, 64] },
  glutapak: { line: 'gastro', range: [65, 71] },
  phlebodia: { line: 'gastro', range: [72, 77] }
} as const;

export type ProductName = keyof typeof productRanges;
export type ProductLine = 'gastro' | 'dolor' | 'gineco - urologia' | 'pediatria - respiratoria' | 'dermatologia' | 'hidrisage' | 'oftamologia' | 'medicina general';

function getImagePath(line: string, product: string, type: string, number: number) {
  const imageName = `image${number}`;
  return `/assets/img/${imageName}.jpg`;
}

export function getProductImages(product: ProductName, imageNumber: number) {
  const config = productRanges[product];
  
  try {
    const paths = {
      desktop: {
        jpg: getImagePath(config.line, product, 'desktop', imageNumber)
      },
      tablet: {
        jpg: getImagePath(config.line, product, 'tablet', imageNumber)
      }
    };

    console.log('Image paths:', paths); // Para depuración

    const images = {
      desktop: {
        jpg: images.desktop.jpg[paths.desktop.jpg]?.default || paths.desktop.jpg
      },
      tablet: {
        jpg: images.tablet.jpg[paths.tablet.jpg]?.default || paths.tablet.jpg
      }
    };

    return images;
  } catch (error) {
    console.error(`Error loading images for product ${product} number ${imageNumber}:`, error);
    return null;
  }
}

export function getProductSlides(product: ProductName) {
  const config = productRanges[product];
  const slides = [];
  
  // Agregar imágenes del rango principal
  for (let i = config.range[0]; i <= config.range[1]; i++) {
    const images = getProductImages(product, i);
    if (images) {
      slides.push(images);
    }
  }
  
  // Agregar imágenes extra si existen
  if (config.extra) {
    for (const pageNum of config.extra) {
      const images = getProductImages(product, pageNum);
      if (images) {
        slides.push(images);
      }
    }
  }
  
  return slides;
}