const { ObjectId, ReturnDocument } = require('mongodb');
const MailerService = require('./MailerService');

class MessageService {
  async findAll(db) {
    const messages = db.collection('messages');
    const allMessages = await messages.find().toArray();
    return allMessages;
  }

  async getById(db, id) {
    const messages = db.collection('messages');
    const message = await messages.findOne({ _id: new ObjectId(id) });
    return message;
  }

  async saveMessage(db, data) {
    const messages = db.collection('messages');
    const documentCount = await messages.countDocuments({}, { hint: '_id_' });
    const result = await messages.insertOne({
      id: documentCount + 1,
      ...data,
      date: new Date(),
      senderConfirm: false,
      receiverResponse: 'NA', // receiverResponse can be 'NA', 'accepted' or 'declined'
    });
    console.log('MessageService: message stored in database!');
    return result.insertedId;
  }

  async updateMessage(db, data, action) {
    const messages = db.collection('messages');
    let message = null;
    if (action === 'confirm') {
      message = await messages.findOneAndUpdate(
        {
          _id: new ObjectId(data.messageId),
        },
        { $set: { senderConfirm: true } },
        { returnDocument: 'after' },
      );
    }

    if (action === 'accepted' || action === 'declined') {
      message = await messages.findOneAndUpdate(
        {
          _id: new ObjectId(data.messageId),
        },
        { $set: { receiverResponse: action } },
        { returnDocument: 'after' },
      );
    }
    return message;
  }
}

module.exports = new MessageService();
