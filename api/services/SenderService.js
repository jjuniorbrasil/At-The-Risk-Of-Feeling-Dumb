class SenderService {
  async saveOrUpdate(db, email) {
    const senders = db.collection('senders');
    const senderQuery = { email };
    const sender = await senders.findOne(senderQuery);

    if (sender) {
      await senders.updateOne(senderQuery, {
        $set: { lastUse: new Date() },
      });
    } else {
      await senders.insertOne({
        email,
        lastUse: new Date(),
      });
    }

    console.log(email + ' saved/updated as sender.');
  }
}

module.exports = new SenderService();
