const mongoose = require('mongoose');

const accessLogSchema = new mongoose.Schema({
  access_time: {
    type: String,
    required: true
  },
  access_date: {
    type: Date,
    required: true
  },
  employee_name: {
    type: String,
    required: true
  },
  algo_status: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AccessLog', accessLogSchema);