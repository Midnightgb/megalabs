type ProductRange = {
  line: ProductLine;
  range: readonly [number, number];
  extra?: readonly number[];
};

export const productRanges: Record<string, ProductRange> = {
  dexgstrol: { line: 'gastro', range: [8, 15] },
  sansflu: { line: 'gastro', range: [16, 21], extra: [176, 177] },
  pregesix: { line: 'gastro', range: [21, 29] },
  lunarium: { line: 'gastro', range: [29, 34], extra: [178, 179] },
  combispas: { line: 'gastro', range: [34, 39], extra: [180, 181] },
  kirruiz: { line: 'gastro', range: [39, 44], extra: [182, 183] },
  'neocholal-s': { line: 'gastro', range: [44, 53], extra: [184, 185] },
  enterex: { line: 'gastro', range: [53, 60] },
  lactipan: { line: 'gastro', range: [60, 65] },
  glutapak: { line: 'gastro', range: [65, 72] },
  phlebodia: { line: 'gastro', range: [72, 78] }
} as const;

export type ProductName = keyof typeof productRanges;

export type ProductLine = 'gastro' | 'dolor' | 'urologia' | 'respiratoria' | 'dermatologia' | 'hidrisage' | 'oftamologia' | 'medicina';

export function getProductImages(product: ProductName, imageNumber: number) {
  const config = productRanges[product]
  const formattedImageNumber = imageNumber.toString()
  console.log(formattedImageNumber);
  
  
  const imageName = `BOOK GAS 0924-2_page78_image${formattedImageNumber}`
  
  return {
    desktop: {
      webp: `/src/assets/img/${config.line}/${product}/desktop/webp/${imageName}.webp`,
      jpg: `/src/assets/img/${config.line}/${product}/desktop/jpg/${imageName}.jpg`
    },
    tablet: {
      webp: `/src/assets/img/${config.line}/${product}/tablet/webp/${imageName}.webp`,
      jpg: `/src/assets/img/${config.line}/${product}/tablet/jpg/${imageName}.jpg`
    }
  }
}

export function getProductSlides(product: ProductName) {
  const config = productRanges[product]
  const slides = []
  
  // Agregar imágenes del rango principal
  for (let i = config.range[0]; i <= config.range[1]; i++) {
    const images = getProductImages(product, i)
    slides.push({
      desktop: {
        webp: images.desktop.webp,
        jpg: images.desktop.jpg // fallback para navegadores antiguos
      },
      tablet: {
        webp: images.tablet.webp,
        jpg: images.tablet.jpg // fallback para navegadores antiguos
      }
    })
  }
  
  // Agregar imágenes extra si existen
  if (config.extra) {
    for (const pageNum of config.extra) {
      const images = getProductImages(product, pageNum)
      slides.push({
        desktop: {
          webp: images.desktop.webp,
          jpg: images.desktop.jpg
        },
        tablet: {
          webp: images.tablet.webp,
          jpg: images.tablet.jpg
        }
      })
    }
  }
  
  return slides
}
