const express = require('express');
const router = express.Router();
const TripGoal = require('../models/Goals'); // Modelul pentru transport

// GET all trip goals
router.get('/goals', async (req, res) => {
    try {
      const goals = await TripGoal.find();
      res.status(200).json(goals);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

module.exports = router;
