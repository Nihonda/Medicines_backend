const express = require('express');
const getTotalController = require('../controllers/getTotalController');

const router = express.Router();

router.route('/').get(getTotalController.getTotalNum);

module.exports = router;
