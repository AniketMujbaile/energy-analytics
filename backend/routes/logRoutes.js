const express = require('express');
const { createLog, getLogs } = require('../controllers/logController');
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth);
router.post('/', createLog);
router.get('/', getLogs);

module.exports = router;