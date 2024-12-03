const mongoose = require('mongoose');

const TripGoalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Goal', TripGoalSchema);
