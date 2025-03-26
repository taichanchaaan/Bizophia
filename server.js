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

// Serve static files with proper MIME types
app.use(express.static(__dirname, {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Handle SPA routing - redirect all requests to index.html
app.get('*', (req, res, next) => {
  // Skip API routes and asset files
  if (req.url.startsWith('/api') || req.url.includes('.')) {
    return next();
  }
  
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
