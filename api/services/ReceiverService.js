class ReceiverService {
  async findAll(db) {
    const receiversCollection = db.collection('receivers');
    const receivers = await receiversCollection.find().toArray();
    return receivers;
  }

  async getById(db, email) {
    const receivers = db.collection('receivers');
    const query = { email };
    let receiver = await receivers.findOne(query);

    if (!receiver) {
      receiver = {
        lastSent: 0,
      };
    }

    return receiver;
  }

  async saveOrUpdate(db, receiverEmail) {
    const receivers = db.collection('receivers');
    const query = { receiverEmail };
    const receiver = await receivers.findOne(query);

    if (receiver) {
      await receivers.updateOne(senderQuery, {
        $set: { lastSent: new Date() },
      });
    } else {
      await receivers.insertOne({
        email: receiverEmail,
        lastSent: new Date(),
      });
    }

    console.log(receiverEmail + ' saved/updated as receiver.');
  }
}

module.exports = new ReceiverService();
