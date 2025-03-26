const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 5001;

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Log requests for debugging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve the index.html for the root path
app.get('/', (req, res) => {
  console.log('Serving index.html for root path');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files with proper MIME types
app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
      console.log(`Serving JS file: ${path.basename(filePath)}`);
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
      console.log(`Serving CSS file: ${path.basename(filePath)}`);
    }
  }
}));

// Handle SPA routing - redirect all other requests to index.html
app.get('*', (req, res) => {
  // Skip if the file exists
  const filePath = path.join(__dirname, req.url);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    console.log(`Serving existing file: ${req.url}`);
    return res.sendFile(filePath);
  }
  
  console.log(`Redirecting ${req.url} to index.html (SPA routing)`);
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Current directory: ${__dirname}`);
  
  // List important files for debugging
  console.log('\nImportant files:');
  if (fs.existsSync(path.join(__dirname, 'index.html'))) {
    console.log('✅ index.html exists');
  } else {
    console.log('❌ index.html missing');
  }
  
  if (fs.existsSync(path.join(__dirname, 'assets', 'index-c0381769.js'))) {
    console.log('✅ Main JS file exists');
  } else {
    console.log('❌ Main JS file missing');
  }
  
  if (fs.existsSync(path.join(__dirname, 'assets', 'index-829ebc8c.css'))) {
    console.log('✅ Main CSS file exists');
  } else {
    console.log('❌ Main CSS file missing');
  }
});
