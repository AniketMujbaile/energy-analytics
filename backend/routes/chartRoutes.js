const express = require('express');
const { getChartData, addChartData } = require('../controllers/chartController');
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth);
router.get('/data', getChartData);
router.post('/data', addChartData);

module.exports = router;