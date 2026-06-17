const fs = require('fs');
const path = require('path');

const basePath = '/alsson-web';
const outDir = path.join(__dirname, 'out');

function fixFile(filePath, ext) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace all occurrences of /images/ and /fonts/ with basePath prefix
  // Use a negative lookbehind to avoid double-prefixing
  content = content.replace(/(?<!\w)\/images\//g, `${basePath}/images/`);
  content = content.replace(/(?<!\w)\/fonts\//g, `${basePath}/fonts/`);

  if (content !== original) {
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
