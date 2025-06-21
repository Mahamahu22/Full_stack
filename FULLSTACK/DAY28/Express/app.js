const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Route: Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route: About
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Route: Dir
app.get('/dir', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dir', 'index.html'));
});

// 404 Route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Maha's Express server running at http://localhost:${PORT}`);
});
