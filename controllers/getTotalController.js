const Drug = require('../models/drugModel');

exports.getTotalNum = async (req, res, next) => {
  try {
    // BUILD QUERY
    const queryObject = { ...req.query };

    const query = Drug.find(queryObject);

    // Count total number of results
    const results = await Drug.count(query);

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      total: results,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
