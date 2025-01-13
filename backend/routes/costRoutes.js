const express = require('express');
const router = express.Router();
const Cost = require('../models/Cost');
const authenticate = require('../middleware/authMiddleware'); // Middleware de autentificare

// Adăugarea unui cost nou, asociat cu utilizatorul autentificat
router.post('/costs', authenticate, async (req, res) => {
    const { tripId, type, amount, groupType } = req.body;

    if (!tripId || !type || !amount || !groupType) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newCost = new Cost({
            tripId,
            user: req.user.id,  // Asocierea costului cu utilizatorul autentificat
            type,
            amount,
            contributors: [],
            description: groupType
        });

        await newCost.save();
        res.status(201).json({ message: 'Cost added successfully!', newCost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obține toate costurile doar pentru utilizatorul autentificat
router.get('/costs', authenticate, async (req, res) => {
    console.log('GET /api/costs was hit');
    try {
        const costs = await Cost.find({ user: req.user.id }); // Filtrare după user
        res.json(costs);
    } catch (error) {
        res.status(500).send('Error fetching costs');
    }
});

module.exports = router;
