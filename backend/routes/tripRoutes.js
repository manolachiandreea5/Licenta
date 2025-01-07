const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip'); // Modelul Trip
const Goal = require('../models/Goals');
const Transport = require('../models/Transport');
const Activity = require('../models/Activity');
const Cost = require('../models/Cost');
const mongoose = require('mongoose');
const authenticate = require('../middleware/authMiddleware'); // Importează middleware-ul


// tripGoals: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Goal', // Acesta trebuie să corespundă numelui din `mongoose.model` din `Goals.js`
//     },
//   ],

// GET all trips
router.get('/trips', authenticate, async (req, res) => {
    try {
      console.log("User ID:", req.user.id);
      const trips = await Trip.find({ user: req.user.id })
        .populate('transport')
        .populate('tripGoals')
        .populate('activities')
        .populate('costs');
      console.log("Trips fetched:", trips);
      res.status(200).json(trips);
    } catch (error) {
      console.error('Error fetching trips:', error); // Log eroarea
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  

// POST create a new trip
router.post('/trips',authenticate, async (req, res) => {
    try {
      const { name, startDate, endDate, transport, tripGoals, activities, costs } = req.body;
  
      if (!name || !startDate || !endDate || !transport) {
        return res.status(400).json({ message: 'Name, startDate, endDate, and transport are required' });
      }
  
      const newTrip = new Trip({
        name,
        startDate,
        endDate,
        transport,
        tripGoals,
        activities,
        costs,
        user: req.user.id, 
      });
  
      const savedTrip = await newTrip.save();
      res.status(201).json(savedTrip);
    } catch (error) {
      console.error('Error creating trip:', error); // Log eroarea
      res.status(400).json({ message: 'Failed to create trip', error });
    }
  });
  

// DELETE a trip by ID
router.delete('/trips/:id', authenticate,async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid trip ID' });
      }
  
      const deletedTrip = await Trip.findOneAndDelete({ _id: req.params.id, user: req.user.id });
      if (!deletedTrip) {
        return res.status(404).json({ message: 'Trip not found' });
      }
  
      res.status(200).json({ message: 'Trip deleted successfully', deletedTrip });
    } catch (error) {
      console.error('Error deleting trip:', error); // Log eroarea
      res.status(500).json({ message: 'Failed to delete trip', error });
    }
  });
  

module.exports = router;
