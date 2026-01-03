import fs from 'fs';
import path from 'path';
import { readdirSync, statSync } from 'fs';

const rootDir = './src';
const publicDir = './public';
const extensions = ['.tsx', '.ts', '.css', '.html'];

const referenced = new Set();

function findRefs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(/\/assets\/images\/[^'"\s]*/g);
  if (matches) {
    matches.forEach(match => {
      // Extract the path without quotes
      const imgPath = match.replace(/['"]/g, '');
      referenced.add(imgPath);
    });
  }
}

function walkDir(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else {
      const ext = path.extname(filePath);
      if (extensions.includes(ext)) {
        findRefs(filePath);
      }
    }
  }
}

walkDir(rootDir);
walkDir(publicDir);

// Now, get all image files
const imageDir = './public/assets/images';
const allImages = new Set();

function collectImages(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      collectImages(filePath);
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const relPath = '/assets/images/' + path.relative(imageDir, filePath).replace(/\\/g, '/');
        allImages.add(relPath);
      }
    }
  }
}

collectImages(imageDir);

// Find unused
const unused = [];
for (const img of allImages) {
  if (!referenced.has(img)) {
    unused.push(img);
  }
}

console.log('Referenced images:');
referenced.forEach(ref => console.log(ref));

console.log('\nUnused images:');
unused.forEach(img => console.log(img));

// Delete unused
for (const img of unused) {
  const filePath = path.join('./public', img.slice(1)); // remove leading /
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted ${filePath}`);
  }
}
