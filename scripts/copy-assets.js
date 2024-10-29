const fs = require('fs-extra');
const path = require('path');

async function copyAssets() {
  const srcAssetsPath = path.join(__dirname, '../src/assets');
  const distAssetsPath = path.join(__dirname, '../dist/assets');
  const iosAssetsPath = path.join(__dirname, '../ios/App/App/public/assets');

  try {
    // Asegúrate de que el directorio existe
    await fs.ensureDir(distAssetsPath);
    await fs.ensureDir(iosAssetsPath);

    // Copia los assets
    await fs.copy(srcAssetsPath, path.join(distAssetsPath, 'src-assets'), {
      overwrite: true
    });

    console.log('Assets copiados exitosamente');
  } catch (err) {
    console.error('Error copiando assets:', err);
  }
}

copyAssets();