const ws = new WebSocket('ws://localhost:3002');
const msg = document.getElementById('msg');
const chat = document.getElementById('chat');

ws.onmessage = (event) => {
  const li = document.createElement('li');
  li.textContent = event.data;
  chat.appendChild(li);
};

function send() {
  if (msg.value.trim()) {
    ws.send(msg.value);
    msg.value = '';
  }
}
