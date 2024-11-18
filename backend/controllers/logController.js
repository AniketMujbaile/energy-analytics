const AccessLog = require('../models/AccessLog');

exports.createLog = async (req, res) => {
  try {
    const { access_time, access_date, employee_name, algo_status } = req.body;
    const log = new AccessLog({
      access_time,
      access_date,
      employee_name,
      algo_status: algo_status === 'true'
    });

    await log.save();
    res.status(201).json({ data: log });
  } catch (error) {
    res.status(500).json({ message: 'Error creating access log' });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const logs = await AccessLog.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({ data: logs });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching access logs' });
  }
};
