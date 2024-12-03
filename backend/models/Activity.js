const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  name: { type: String, required: true },
  description: String,
  location: String,
  startTime: Date,
  endTime: Date,
  cost: Number,
  participants: [String],
});

module.exports = mongoose.model('Activity', activitySchema);
