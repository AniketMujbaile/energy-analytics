const mongoose = require('mongoose');

const energyDataSchema = new mongoose.Schema({
  total_kwh: {
    type: Number,
    required: true
  },
  algo_status: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('EnergyData', energyDataSchema);