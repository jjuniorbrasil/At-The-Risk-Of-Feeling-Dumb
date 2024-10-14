const SendersService = require('./../services/SenderService.js');
const db = require('./../db/connDb.js');

class SendersController {
  async index(req, res) {
    try {
      const senders = await SendersService.findAll(db);
      res.status(200).send(senders);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }

  async getById(req, res) {
    try {
      const sender = await SendersService.getById(db, req.params.email);
      res.status(200).send(sender);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }
}

module.exports = new SendersController();
