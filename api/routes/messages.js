const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages.js');

router.get('/', messagesController.index); // get all messages - debug purposes
router.get('/:messageId', messagesController.getById);
router.put('/:messageId', messagesController.confirmSend);
router.put('/:messageId/:action', messagesController.acceptOrDecline);

module.exports = router;
