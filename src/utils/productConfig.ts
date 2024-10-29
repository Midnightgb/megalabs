import { Capacitor } from '@capacitor/core';

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

function getAssetPath(path: string): string {
  const isNative = Capacitor.isNativePlatform();
  return isNative ? path.substring(1) : path;
}

function normalizeProductName(name: string): string {
  return name.toLowerCase().trim();
}

function encodeImagePath(path: string): string {
  const segments = path.split('/');
  const fileName = segments.pop();
  const encodedFileName = fileName ? encodeURIComponent(fileName) : '';
  
  // Normaliza todos los segmentos de la ruta a minúsculas
  const normalizedSegments = segments.map(segment => segment.toLowerCase());
  
  return [...normalizedSegments, encodedFileName].join('/');
}

export function getProductImages(product: ProductName, imageNumber: number) {
  const config = productRanges[product];
  const normalizedProduct = normalizeProductName(product);
  const normalizedLine = normalizeProductName(config.line);
  const imageName = `BOOK GAS 0924-2_page78_image${imageNumber}`;
  
  const baseUrl = `src/assets/img/${normalizedLine}/${normalizedProduct}`;
  
  // Crear las rutas
  const paths = {
    desktop: {
      webp: getAssetPath(encodeImagePath(`${baseUrl}/desktop/webp/${imageName}.webp`)),
      jpg: getAssetPath(encodeImagePath(`${baseUrl}/desktop/jpg/${imageName}.jpg`))
    },
    tablet: {
      webp: getAssetPath(encodeImagePath(`${baseUrl}/tablet/webp/${imageName}.webp`)),
      jpg: getAssetPath(encodeImagePath(`${baseUrl}/tablet/jpg/${imageName}.jpg`))
    }
  };

  // Log para verificar las rutas generadas
  console.log(`[Image Paths] Product: ${normalizedProduct}, Number: ${imageNumber}`, {
    desktop: paths.desktop,
    tablet: paths.tablet,
    isNative: Capacitor.isNativePlatform()
  });

  return paths;
}

export function getProductSlides(product: ProductName) {
  const config = productRanges[product];
  const slides = [];
  
  // Agregar imágenes del rango principal
  for (let i = config.range[0]; i <= config.range[1]; i++) {
    const images = getProductImages(product, i);
    slides.push({
      desktop: {
        webp: images.desktop.webp,
        jpg: images.desktop.jpg
      },
      tablet: {
        webp: images.tablet.webp,
        jpg: images.tablet.jpg
      }
    });
  }
  
  // Agregar imágenes extra si existen
  if (config.extra) {
    for (const pageNum of config.extra) {
      const images = getProductImages(product, pageNum);
      slides.push({
        desktop: {
          webp: images.desktop.webp,
          jpg: images.desktop.jpg
        },
        tablet: {
          webp: images.tablet.webp,
          jpg: images.tablet.jpg
        }
      });
    }
  }
  
  return slides;
}

// Función auxiliar para verificar rutas de archivos
export function validateProductPaths(product: ProductName): void {
  const config = productRanges[product];
  const normalizedProduct = normalizeProductName(product);
  
  console.log(`[Validating Paths] Product: ${normalizedProduct}`);
  
  const slides = getProductSlides(product);
  slides.forEach((slide, index) => {
    Object.entries(slide).forEach(([device, formats]) => {
      Object.entries(formats).forEach(([format, path]) => {
        console.log(`[Path Check] ${device}/${format}: ${path}`);
      });
    });
  });
}