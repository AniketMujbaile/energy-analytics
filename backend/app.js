const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const chartRoutes = require('./routes/chartRoutes');
const logRoutes = require('./routes/logRoutes');

dotenv.config();

const app = express();

// Middleware
// app.use(cors());

// Configure CORS
app.use(cors({
  origin: 'https://energy-analytics-5tny.vercel.app',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  credentials: true  
}));

app.use(express.json());
app.use(morgan('dev'));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chart', chartRoutes);
app.use('/api/logs', logRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));