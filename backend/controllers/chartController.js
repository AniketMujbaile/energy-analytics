const EnergyData = require('../models/EnergyData');

exports.getChartData = async (req, res) => {
  try {
    const { startDate, endDate, algo_status } = req.query;
    let query = {};

    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    if (algo_status !== undefined) {
      query.algo_status = algo_status === 'true';
    }

    const data = await EnergyData.find(query)
      .sort({ createdAt: 1 })
      .select('total_kwh algo_status createdAt');

    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chart data' });
  }
};

exports.addChartData = async (req, res) => {
  try {
    const { total_kwh, algo_status, createdAt } = req.body;
    const energyData = new EnergyData({
      total_kwh,
      algo_status,
      createdAt: createdAt || new Date()
    });

    await energyData.save();
    res.status(201).json({ data: energyData });
  } catch (error) {
    res.status(500).json({ message: 'Error adding chart data' });
  }
};
