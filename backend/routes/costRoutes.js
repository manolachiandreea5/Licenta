const express = require('express');
const router = express.Router();
const Cost = require('../models/Cost');

// Adăugarea unui cost nou
router.post('/add-cost', async (req, res) => {
    const { tripId, type, amount, groupType } = req.body;

    if (!tripId || !type || !amount || !groupType) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newCost = new Cost({
            tripId,
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

router.get('/costs', async (req, res) => {
    console.log('GET /api/costs was hit');
    try {
        const costs = await Cost.find();
        res.json(costs);
    } catch (error) {
        res.status(500).send('Error fetching costs');
    }
});

module.exports = router;

