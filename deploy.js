import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const distDir = 'dist';

console.log('Deploying to gh-pages...');

// Ensure dist exists
if (!fs.existsSync(distDir)) {
  console.error('dist directory not found. Run npm run build first.');
  process.exit(1);
}

// Initialize git repo in dist if not exists
const gitDir = path.join(distDir, '.git');
if (!fs.existsSync(gitDir)) {
  execSync('git init', { cwd: distDir, stdio: 'inherit' });
  execSync('git checkout -b gh-pages', { cwd: distDir, stdio: 'inherit' });
} else {
  execSync('git checkout gh-pages', { cwd: distDir, stdio: 'inherit' });
}

// Add .nojekyll to prevent GitHub Pages from ignoring files starting with _
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

// Add all files
execSync('git add -A', { cwd: distDir, stdio: 'inherit' });

// Commit
try {
  execSync('git commit -m "Deploy to GitHub Pages"', { cwd: distDir, stdio: 'inherit' });
} catch (e) {
  console.log('No changes to commit');
}

// Push to gh-pages branch
execSync('git push -f https://github.com/JKGlobalItSolutions/Hrify-Digital-website.git gh-pages', { cwd: distDir, stdio: 'inherit' });

console.log('Deployed successfully!');
