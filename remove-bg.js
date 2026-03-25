import sharp from 'sharp';

const inputPath = './public/logo.png';
const outputPath = './public/logo-transparent.png';

async function removeWhiteBackground() {
  const image = sharp(inputPath);
  
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    
    if (r > 240 && g > 240 && b > 240) {
      pixels[i + 3] = 0;
    }
  }

  await sharp(pixels, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log('Done! Transparent logo saved.');
}

removeWhiteBackground().catch(console.error);
