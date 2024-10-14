const SendersService = require('../services/Senders.js');
const db = require('./../db/connDb.js');

class SendersController {
  async index(req, res) {
    try {
      const receivers = await ReceiverService.findAll(db);
      res.status(200).send(receivers);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }

  async getById(req, res) {
    try {
      const receiver = await ReceiverService.getById(db, req.params.email);
      res.status(200).send(receiver);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }
}

module.exports = new ReceiversController();
