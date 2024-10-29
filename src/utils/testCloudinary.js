import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: 'djj2wobjt',
  api_key: '756561289266657',
  api_secret: ''
});

// Definir los rangos para cada producto
const productRanges = {
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
};

async function organizeCloudinaryImages() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500,
    });

    const organizedData = {
      total_imgs: 0,
      missing_imgs: {} // Para trackear imágenes faltantes
    };

    // Función para verificar si un número está en el rango del producto
    function isInProductRange(productName, imageNumber) {
      const productInfo = productRanges[productName];
      if (!productInfo) return false;

      const [min, max] = productInfo.range;
      const extras = productInfo.extra || [];
      
      return (imageNumber >= min && imageNumber <= max) || extras.includes(imageNumber);
    }

    // Inicializar estructura para trackear imágenes faltantes
    for (const productName in productRanges) {
      const [min, max] = productRanges[productName].range;
      const extras = productRanges[productName].extra || [];
      const expectedNumbers = [...Array(max - min + 1).keys()].map(n => n + min);
      if (extras) expectedNumbers.push(...extras);
      
      organizedData.missing_imgs[productName] = {
        expected: expectedNumbers,
        found: []
      };
    }

    result.resources.forEach(resource => {
      if (!resource.asset_folder) return;

      const [base, productName, deviceType, format] = resource.asset_folder.split('/');
      
      if (!productName || !deviceType || !format) return;

      // Extraer número de imagen del public_id
      const imageNumberMatch = resource.public_id.match(/image(\d+)/);
      if (!imageNumberMatch) return;
      
      const imageNumber = parseInt(imageNumberMatch[1]);
      
      // Verificar si la imagen está en el rango correcto
      if (!isInProductRange(productName, imageNumber)) {
        console.warn(`Warning: Image ${resource.public_id} number ${imageNumber} is outside the expected range for ${productName}`);
        return;
      }

      // Registrar imagen encontrada
      if (organizedData.missing_imgs[productName]) {
        organizedData.missing_imgs[productName].found.push(imageNumber);
      }

      // Initialize product object if it doesn't exist
      if (!organizedData[productName]) {
        organizedData[productName] = {
          'tablet-webp': [],
          'tablet-jpg': [],
          'desktop-webp': [],
          'desktop-jpg': []
        };
      }

      const key = `${deviceType}-${format}`;
      
      if (organizedData[productName][key] !== undefined) {
        organizedData[productName][key].push({
          public_id: resource.public_id,
          asset_folder: resource.asset_folder,
          secure_url: resource.secure_url
        });
        organizedData.total_imgs++;
      }
    });

    // Ordenar arrays y calcular imágenes faltantes
    for (const productName in organizedData) {
      if (productName === 'total_imgs' || productName === 'missing_imgs') continue;
      
      // Ordenar cada array de imágenes
      for (const key in organizedData[productName]) {
        organizedData[productName][key].sort((a, b) => {
          const getImageNumber = (pid) => {
            const match = pid.match(/image(\d+)/);
            return match ? parseInt(match[1]) : 0;
          };
          return getImageNumber(a.public_id) - getImageNumber(b.public_id);
        });
      }

      // Calcular imágenes faltantes
      if (organizedData.missing_imgs[productName]) {
        const found = new Set(organizedData.missing_imgs[productName].found);
        organizedData.missing_imgs[productName].missing = 
          organizedData.missing_imgs[productName].expected.filter(num => !found.has(num));
      }
    }

    // Write to JSON file
    fs.writeFileSync(
      'cloudinary-images.json',
      JSON.stringify(organizedData, null, 2)
    );

    // Log information about missing images
    console.log('\nMissing images report:');
    for (const productName in organizedData.missing_imgs) {
      const missingInfo = organizedData.missing_imgs[productName];
      if (missingInfo.missing && missingInfo.missing.length > 0) {
        console.log(`${productName}: Missing images ${missingInfo.missing.join(', ')}`);
      }
    }

    console.log(`\nTotal images processed: ${organizedData.total_imgs}`);
    console.log('Full data has been saved to cloudinary-images.json');

  } catch (error) {
    console.error('Error organizing Cloudinary images:', error);
  }
}

organizeCloudinaryImages();