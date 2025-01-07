const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
const transportRoutes = require('./routes/transportRoutes');
const goalsRoutes = require('./routes/goalsRoutes');
const authenticate = require('./middleware/authMiddleware');
const tripRoutes = require('./routes/tripRoutes');
const costRoutes = require('./routes/costRoutes');

const HOST = '172.20.10.6';

// Conexiune la MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));

// Middleware
app.use(express.json());

// Rute
app.use('/api/users', userRoutes);
app.use('/api', transportRoutes); 
app.use('/api', goalsRoutes); 
app.use('/api', tripRoutes);
app.use('/api', costRoutes); 


// Pornire server
app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));

app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: `Bine ai venit, utilizator ${req.user.email}!` });
});


const cors = require('cors');
app.use(cors());

