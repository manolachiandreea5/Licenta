require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1';

// Conexiune la MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));
// Middleware
app.use(express.json());

// Rută simplă
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Pornire server
app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
  });