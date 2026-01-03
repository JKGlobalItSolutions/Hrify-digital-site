import fs from 'fs';
import path from 'path';

function getAllTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllTsxFiles(fullPath, files);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

function toPascalCase(str) {
  str = str.replace(/[^a-zA-Z0-9\-]/g, ''); // remove non-alphanum except -
  const parts = str.split('-').filter(x => x);
  if (!parts.length) return 'Img';
  let result = parts.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  if (!/^[a-zA-Z]/.test(result)) {
    result = 'Img' + result;
  }
  return result;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const imageMatches = content.match(/src=["']\/assets\/images\/[^"]*["']/g) || [];
  const bgMatches = content.match(/background-image:\s*url\([^)]*\)/g) || [];
  const inlineBgMatches = content.match(/backgroundImage:\s*["']url\([^)]*\)["']/g) || [];

  const allMatches = [...imageMatches, ...bgMatches, ...inlineBgMatches];
  if (allMatches.length === 0) return;

  const uniqueImages = [...new Set(allMatches.map(match => {
    if (match.includes('src=')) {
      const m = match.match(/src=["']([^"']+)["']/);
      return m ? m[1] : null;
    } else if (match.includes('background-image:')) {
      const m = match.match(/url\(([^)]+)\)/);
      return m ? m[1].replace(/['"]/g, '') : null;
    } else if (match.includes('backgroundImage:')) {
      const m = match.match(/url\(([^)]+)\)/);
      return m ? m[1].replace(/['"]/g, '') : null;
    }
  }).filter(Boolean))];

  if (uniqueImages.length === 0) return;

  const imports = [];
  const replacements = [];

  for (const img of uniqueImages) {
    const newImg = img.replace(/ /g, '-');
    const relativePath = '../assets/images/' + newImg.slice(15); // remove '/assets/images/'
    const filename = newImg.split('/').pop().split('.')[0];
    const varName = toPascalCase(filename);
    if (!imports.some(imp => imp.includes(`import ${varName} from`))) {
      imports.push(`import ${varName} from '${relativePath}';`);
    }
    replacements.push({ old: `src="${img}"`, new: `src={${varName}}` });
    replacements.push({ old: `src='${img}'`, new: `src={${varName}}` });
    replacements.push({ old: `background-image: url("${img}")`, new: `background-image: url(\${${varName}})` });
    replacements.push({ old: `background-image: url('${img}')`, new: `background-image: url(\${${varName}})` });
    replacements.push({ old: `background-image: url(${img})`, new: `background-image: url(\${${varName}})` });
    replacements.push({ old: `backgroundImage: "url(${img})"`, new: `backgroundImage: \`url(\${${varName}})\`` });
    replacements.push({ old: `backgroundImage: 'url(${img})'`, new: `backgroundImage: \`url(\${${varName}})\`` });
  }

  // Remove existing imports from ../assets/images/
  content = content.replace(/^import \w+ from '\.\.\/assets\/images\/[^']*';$/gm, '');

  // Add imports after the last import line
  const importLines = content.match(/^import.*$/gm);
  if (importLines) {
    const lastImport = importLines[importLines.length - 1];
    const insertPos = content.indexOf(lastImport) + lastImport.length;
    content = content.slice(0, insertPos) + '\n' + imports.join('\n') + content.slice(insertPos);
  } else {
    // If no imports, add at the top after the first line
    const firstLineEnd = content.indexOf('\n') + 1;
    content = content.slice(0, firstLineEnd) + imports.join('\n') + '\n' + content.slice(firstLineEnd);
  }

  // Replace
  for (const rep of replacements) {
    content = content.replace(new RegExp(rep.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), rep.new);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Processed ${filePath}`);
}

const tsxFiles = getAllTsxFiles('src');
for (const file of tsxFiles) {
  processFile(file);
}
