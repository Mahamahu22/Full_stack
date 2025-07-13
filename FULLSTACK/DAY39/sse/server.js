const express = require('express');
const app = express();
const PORT = 3001;

// ✅ Serve HTML from public folder
app.use(express.static('public'));

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const interval = setInterval(() => {
    const now = new Date().toLocaleTimeString();
    res.write(`data: ${now}\n\n`);
  }, 1000);

  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`✅ SSE server running at http://localhost:${PORT}`);
});
