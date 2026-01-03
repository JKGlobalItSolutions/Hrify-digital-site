import fs from 'fs';
import path from 'path';
import { readdirSync, statSync } from 'fs';

const imageDir = './public/assets/images';

function checkSizes(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      checkSizes(filePath);
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const sizeMB = stat.size / (1024 * 1024);
        if (sizeMB > 1) {
          console.log(`Large image: ${filePath} - ${sizeMB.toFixed(2)} MB`);
        }
      }
    }
  }
}

checkSizes(imageDir);
