const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const DATA = './users.json';

app.use(express.json());

function readUsers() {
  return JSON.parse(fs.readFileSync(DATA));
}

function writeUsers(users) {
  fs.writeFileSync(DATA, JSON.stringify(users, null, 2));
}

// Home route
app.get('/', (req, res) => {
  res.send('✅ Welcome to the User Management API. Use /users');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(readUsers());
});

// Get single user
app.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).send('User not found');
});

// Add new user
app.post('/users', (req, res) => {
  const users = readUsers();
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
});

// Replace user
app.put('/users/:id', (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('User not found');
  users[index] = { id: users[index].id, ...req.body };
  writeUsers(users);
  res.json(users[index]);
});

// Update (patch) user
app.patch('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  Object.assign(user, req.body);
  writeUsers(users);
  res.json(user);
});

// Delete user
app.delete('/users/:id', (req, res) => {
  const users = readUsers();
  const filtered = users.filter(u => u.id !== parseInt(req.params.id));
  if (filtered.length === users.length) return res.status(404).send('User not found');
  writeUsers(filtered);
  res.sendStatus(204);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
