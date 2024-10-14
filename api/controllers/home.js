const db = require('./../db/connDb.js');
const transporter = require('./../services/nodemailer.js');
const MessageService = require('./../services/MessageService.js');
const ReceiverService = require('./../services/ReceiverService.js');
const SenderService = require('../services/SenderService.js');
const MailerService = require('../services/MailerService.js');

class HomeController {
  async index(req, res) {
    res.send({message: 'Receivers route.'});
  }

  async store(req, res) {
    const { name, email, receiverEmail, message } = req.body;
    const messageHash = '';

    try {
      const id = await MessageService.saveMessage(db, req.body);
      console.log('ID: ', id);
      await ReceiverService.saveOrUpdate(db, receiverEmail);
      await SenderService.saveOrUpdate(db, email);

      await MailerService.sendConfirmationEmail(transporter, {
        name,
        email,
        receiverEmail,
        confirmHash: id,
      });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }

    res.status(200).send({ message: 'success' });
  }
}

module.exports = new HomeController();
