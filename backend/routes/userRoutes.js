const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');
const router = express.Router();
const Trip = require('../models/Trip');

// Ruta pentru înregistrare
router.post('/register', createUser);

// Ruta pentru autentificare
router.post('/login', loginUser);

router.post('/add-trip', async (req, res) => {
    try {
      const trip = new Trip(req.body);
      await trip.save();
      res.status(201).json(trip);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;