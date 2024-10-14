const MailerService = require('../services/MailerService.js');
const MessageService = require('../services/MessageService.js');
const transporter = require('../services/nodemailer.js');
const db = require('./../db/connDb.js');

class MessagesController {
  async index(req, res) {
    try {
      const messages = await MessageService.findAll(db);
      res.status(200).send(messages);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }

  async getById(req, res) {
    try {
      const message = await MessageService.getById(db, req.params.messageId);

      if (message.receiverResponse !== 'accepted') {
        message.name = null;
        message.email = null;
      }

      if (!message.senderConfirm) {
        throw new Error('Invalid message: NOT_CONFIRMED.');
      }

      res.status(200).send(message);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }

  async confirmSend(req, res) {
    const { messageId } = req.params;
    try {
      const message = await MessageService.getById(db, messageId);
      if (!message.senderConfirm) {
        await MailerService.sendRequestToReceiver(
          transporter,
          messageId,
          message,
        );
      } else {
        console.log('Already confirmed.');
      }
    } catch (e) {
      console.log('MailerService ERROR: ', e.message);
      res.status(500).send({ error: e.message, origin: 'MAILER' });
    }

    try {
      const { name, receiverEmail, senderConfirm } =
        await MessageService.updateMessage(
          db,
          {
            messageId,
          },
          'confirm',
        );
      const result = {
        name,
        receiverEmail,
        senderConfirm,
      };
      res.status(200).send(result);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }

  async acceptOrDecline(req, res) {
    const { messageId, action } = req.params;

    try {
      const message = await MessageService.updateMessage(
        db,
        { messageId },
        action,
      );

      await MailerService.sendAnswerToSender(transporter, message);

      if (action === 'declined') {
        message.name = null;
        message.email = null;
      }

      res.status(200).send(message);
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
}

module.exports = new MessagesController();
