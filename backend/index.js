require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const authenticate = require('./middleware/authMiddleware');

const app = express();
//const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1';
// Middleware
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Rute
app.use('/api/users', userRoutes);

// Conexiune la MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));


// Pornire server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));

app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: `Bine ai venit, utilizator ${req.user.email}!` });
});