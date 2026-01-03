import fs from 'fs';
import path from 'path';
import { readdirSync, statSync } from 'fs';

const rootDir = './src';
const publicDir = './public';
const extensions = ['.tsx', '.ts', '.css', '.html'];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace /assets/images/path.png with .webp
  content = content.replace(/\/assets\/images\/([^'"]*)\.(png|jpg|jpeg)/g, (match, name, ext) => {
    changed = true;
    return `/assets/images/${name}.webp`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
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
        replaceInFile(filePath);
      }
    }
  }
}

walkDir(rootDir);
walkDir(publicDir);
