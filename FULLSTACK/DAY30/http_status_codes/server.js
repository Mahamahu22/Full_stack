const express = require('express');
const app = express();
app.use(express.json());

// 200 - OK
app.get('/', (req, res) => {
  res.status(200).send("✅ OK - Home Page");
});

// 400 - Bad Request
app.get('/bad', (req, res) => {
  res.status(400).send("❌ Bad Request");
});

// 404 - Not Found
app.get('/notfound', (req, res) => {
  res.status(404).send("❌ Not Found");
});

// 500 - Internal Server Error
app.get('/error', (req, res) => {
  throw new Error("Something broke!");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).send("❌ Server Error");
});

app.listen(4000, () => console.log("🚀 Server running on http://localhost:4000"));
