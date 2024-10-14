const ReceiverService = require('./../services/ReceiverService.js');
const db = require('./../db/connDb.js');

class ReceiversController {
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
      res.status(404).send({ error: e.message, sign: 'jun' });
    }
  }
}

module.exports = new ReceiversController();
