const fs = require('fs');
const path = require('path');

const basePath = '/alsson-web';
const outDir = path.join(__dirname, 'out');

function fixFile(filePath, ext) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (ext === '.css') {
    // Fix font and image URLs in CSS
    const updated = content
      .replace(/url\(["']?\/fonts\//g, `url(${basePath}/fonts/`)
      .replace(/url\(["']?\/images\//g, `url(${basePath}/images/`);
    if (updated !== content) { content = updated; changed = true; }
  }

  if (ext === '.html') {
    // Fix src="/images/ and href="/images/ in HTML
    const updated = content
      .replace(/(src|href)="\/images\//g, `$1="${basePath}/images/`)
      .replace(/(src|href)="\/fonts\//g, `$1="${basePath}/fonts/`);
    if (updated !== content) { content = updated; changed = true; }
  }

  if (ext === '.js') {
    // Fix image paths in JS chunks
    const updated = content
      .replace(/"\/images\//g, `"${basePath}/images/`)
      .replace(/'\/images\//g, `'${basePath}/images/`);
    if (updated !== content) { content = updated; changed = true; }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else {
      const ext = path.extname(file);
      if (['.css', '.html', '.js'].includes(ext)) {
        fixFile(filePath, ext);
      }
    }
  });
}

if (fs.existsSync(outDir)) {
  walk(outDir);
  console.log('All paths fixed successfully!');
} else {
  console.log('Output directory not found');
}
