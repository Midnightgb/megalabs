// cloudinaryConfig.ts
import type { CarouselSlide } from '@/components/common/ImageCarousel';
import cloudinaryImages from './cloudinary-images.json';

interface ProductRange {
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

export function getProductSlides(product: ProductName): CarouselSlide[] {
  const config = productRanges[product];
  const slides: CarouselSlide[] = [];
  const productImages = cloudinaryImages[product];
  
  if (!productImages) {
    console.warn(`No images found for product: ${product}`);
    return slides;
  }
  
  // Agregar imágenes del rango principal
  for (let i = config.range[0]; i <= config.range[1]; i++) {
    const desktopWebpImage = productImages['desktop-webp'].find(img => img.public_id.includes(`image${i}`));
    const desktopJpgImage = productImages['desktop-jpg'].find(img => img.public_id.includes(`image${i}`));
    const tabletWebpImage = productImages['tablet-webp'].find(img => img.public_id.includes(`image${i}`));
    const tabletJpgImage = productImages['tablet-jpg'].find(img => img.public_id.includes(`image${i}`));

    if (desktopWebpImage && desktopJpgImage && tabletWebpImage && tabletJpgImage) {
      slides.push({
        image: {
          srcset: desktopWebpImage.secure_url,
          fallback: desktopJpgImage.secure_url,
          sources: [
            {
              srcset: tabletWebpImage.secure_url,
              media: '(max-width: 768px)',
              type: 'image/webp'
            },
            {
              srcset: tabletJpgImage.secure_url,
              media: '(max-width: 768px)',
              type: 'image/jpeg'
            }
          ]
        },
        title: `${product} - Image ${i}`,
        description: ''
      });
    }
  }
  
  // Agregar imágenes extra si existen
  if (config.extra) {
    for (const pageNum of config.extra) {
      const desktopWebpImage = productImages['desktop-webp'].find(img => img.public_id.includes(`image${pageNum}`));
      const desktopJpgImage = productImages['desktop-jpg'].find(img => img.public_id.includes(`image${pageNum}`));
      const tabletWebpImage = productImages['tablet-webp'].find(img => img.public_id.includes(`image${pageNum}`));
      const tabletJpgImage = productImages['tablet-jpg'].find(img => img.public_id.includes(`image${pageNum}`));

      if (desktopWebpImage && desktopJpgImage && tabletWebpImage && tabletJpgImage) {
        slides.push({
          image: {
            srcset: desktopWebpImage.secure_url,
            fallback: desktopJpgImage.secure_url,
            sources: [
              {
                srcset: tabletWebpImage.secure_url,
                media: '(max-width: 768px)',
                type: 'image/webp'
              },
              {
                srcset: tabletJpgImage.secure_url,
                media: '(max-width: 768px)',
                type: 'image/jpeg'
              }
            ]
          },
          title: `${product} - Extra Image ${pageNum}`,
          description: ''
        });
      }
    }
  }
  
  return slides;
}