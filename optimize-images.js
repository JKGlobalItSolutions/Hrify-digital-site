import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename, dirname } from 'path';

const imageDir = './public/assets/images';

function processImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const name = basename(filePath, ext);
  const dir = dirname(filePath);
  const output = join(dir, name + '.webp');

  sharp(filePath)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output)
    .then(() => {
      console.log(`Processed ${filePath} to ${output}`);
      // Optionally delete original after processing
      // fs.unlinkSync(filePath);
    })
    .catch(err => console.error(err));
}

function walkDir(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else {
      processImage(filePath);
    }
  }
}

walkDir(imageDir);
