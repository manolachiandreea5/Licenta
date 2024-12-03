const express = require('express');
const router = express.Router();
const Transport = require('../models/Transport'); // Modelul pentru transport

// GET all transport options
router.get('/transports', async (req, res) => {
  try {
    const transports = await Transport.find(); // Găsește toate transporturile
    res.status(200).json(transports);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
