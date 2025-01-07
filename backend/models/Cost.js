const mongoose = require('mongoose');

const costSchema = new mongoose.Schema({
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  type: { 
    type: String, 
    enum: ['Transport', 'Hotel', 'Restaurant', 'Shopping', 'Activity'], 
    required: true 
  },
  amount: { type: Number, required: true },
  contributors: [String],
  description: String,
});

module.exports = mongoose.model('Cost', costSchema);
