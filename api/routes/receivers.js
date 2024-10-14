const express = require('express');
const router = express.Router();
const receiversController = require('../controllers/receivers.js');

router.get('/', receiversController.index);
router.get('/:email?', receiversController.getById);

module.exports = router;
