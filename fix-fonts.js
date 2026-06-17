const fs = require('fs');
const path = require('path');

const basePath = '/alsson-web';
const outDir = path.join(__dirname, 'out');

// Find and replace font URLs in CSS files
function fixFontUrls(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixFontUrls(filePath);
    } else if (file.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');

      // Replace /fonts/ with basePath/fonts/
      content = content.replace(/url\(["']?\/fonts\//g, `url(${basePath}/fonts/`);

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  });
}

if (fs.existsSync(outDir)) {
  fixFontUrls(outDir);
  console.log('Font URLs fixed successfully!');
} else {
  console.log('Output directory not found');
}
