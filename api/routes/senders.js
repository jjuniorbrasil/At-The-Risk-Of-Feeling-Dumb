const express = require('express');
const router = express.Router();
const sendersController = require('../controllers/senders.js');

router.get('/', sendersController.index);
router.get('/:email?', sendersController.getById);

module.exports = router;
