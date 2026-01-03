import fs from 'fs';
import path from 'path';

function getAllTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllTsxFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  return files;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Replace import VarName from '../assets/images/path'; with const VarNameImg = '/assets/images/path';
  content = content.replace(/^import (\w+) from '\.\.\/assets\/images\/([^']+)';$/gm, (match, varName, imgPath) => {
    modified = true;
    const newVarName = varName + 'Img';
    // Also replace the usage src={VarName} with src={VarNameImg}
    content = content.replace(new RegExp(`src=\{${varName}\}`, 'g'), `src={${newVarName}}`);
    return `const ${newVarName} = '/assets/images/${imgPath}';`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

const files = getAllTsxFiles('src');
for (const file of files) {
  processFile(file);
}

console.log('All files updated.');
