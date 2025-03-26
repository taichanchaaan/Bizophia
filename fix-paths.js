const fs = require('fs');
const path = require('path');

// GitHub Pages base path
const BASE_PATH = '/Bizophia';

// Function to read and modify the index.html file
function fixIndexHtml() {
  const indexPath = path.join(__dirname, 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Update asset paths in index.html
  content = content.replace(/src="\.\//g, `src="${BASE_PATH}/`);
  content = content.replace(/href="\.\//g, `href="${BASE_PATH}/`);
  
  // Add base tag for SPA routing
  content = content.replace(/<head>/, `<head>\n  <base href="${BASE_PATH}/">`);
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ Updated index.html with correct base path');
}

// Main function
function main() {
  console.log('Fixing paths for GitHub Pages deployment...');
  fixIndexHtml();
  console.log('Done! The application should now work correctly on GitHub Pages.');
}

main();
