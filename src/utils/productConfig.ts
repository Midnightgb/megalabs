type ProductRange = {
  line: ProductLine;
  range: readonly [number, number];
  extra?: readonly number[];
};

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

function encodeImagePath(path: string): string {
  // Divide la ruta en segmentos y codifica solo la parte del nombre del archivo
  const segments = path.split('/');
  const fileName = segments.pop(); // Obtiene el último segmento (nombre del archivo)
  const encodedFileName = encodeURIComponent(fileName || '');
  return [...segments, encodedFileName].join('/');
}

export function getProductImages(product: ProductName, imageNumber: number) {
  const config = productRanges[product];
  const imageName = `BOOK GAS 0924-2_page78_image${imageNumber}`;
  
  const baseUrl = `/assets/img/${config.line}/${product}`;
  
  // Crear las rutas
  const paths = {
    desktop: {
      webp: encodeImagePath(`${baseUrl}/desktop/webp/${imageName}.webp`),
      jpg: encodeImagePath(`${baseUrl}/desktop/jpg/${imageName}.jpg`)
    },
    tablet: {
      webp: encodeImagePath(`${baseUrl}/tablet/webp/${imageName}.webp`),
      jpg: encodeImagePath(`${baseUrl}/tablet/jpg/${imageName}.jpg`)
    }
  };

  // Log para verificar las rutas generadas
  console.log(`[Image Paths] Product: ${product}, Number: ${imageNumber}`, {
    desktop: paths.desktop,
    tablet: paths.tablet
  });

  // Verificar si las imágenes existen
  Promise.all([
    fetch(paths.desktop.jpg),
    fetch(paths.desktop.webp),
    fetch(paths.tablet.jpg),
    fetch(paths.tablet.webp)
  ]).then(responses => {
    responses.forEach((res, index) => {
      const format = index % 2 === 0 ? 'jpg' : 'webp';
      const device = index < 2 ? 'desktop' : 'tablet';
      console.log(`[Image Check] ${product} - ${device}/${format}: ${res.ok ? 'OK' : 'Failed'}`);
    });
  }).catch(error => {
    console.error(`[Image Load Error] ${product}:`, error);
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