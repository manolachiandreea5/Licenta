const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '192.168.1.238';


const userRoutes = require('./routes/userRoutes');
const transportRoutes = require('./routes/transportRoutes');
const goalsRoutes = require('./routes/goalsRoutes');
const authenticate = require('./middleware/authMiddleware');
const tripRoutes = require('./routes/tripRoutes');
const costRoutes = require('./routes/costRoutes');

app.use(cors());
// Middleware
app.use(express.json());

// Conexiune la MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));



// Rute
app.use('/api/users', userRoutes);
app.use('/api', transportRoutes); 
app.use('/api', goalsRoutes); 
app.use('/api', tripRoutes);
app.use('/api', costRoutes); 


app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: `Bine ai venit, utilizator ${req.user.email}!` });
});



//Catch-All for Debugging Non-JSON Errors
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


// Pornire server
app.listen(PORT, () => console.log(`Server running at http://${HOST}:${PORT}`));
