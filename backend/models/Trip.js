const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  startDate: { 
    type: Date, 
    required: true 
},
  endDate: { 
    type: Date, 
    required: true 
},
  transport: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Transport', 
    required: true 
},
  tripGoals: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Goal' 
}],
  activities: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Activity' 
}],
  costs: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Cost' 
}],
  user: { // Referință către utilizatorul care a creat trip-ul
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User', 
  required: true,
},
  friends: [{ // Listă de prieteni adăugați la trip
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Trip', tripSchema);
