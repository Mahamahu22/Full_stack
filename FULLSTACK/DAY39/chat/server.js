const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let clients = [];

wss.on('connection', (ws) => {
  clients.push(ws);

  ws.on('message', (message) => {
    // Broadcast to all clients
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    clients = clients.filter(c => c !== ws);
  });
});

app.use(express.static('public'));

server.listen(3003, () => {
  console.log('WebSocket server on http://localhost:3003');
});
