const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'atrofdmessage@gmail.com',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    // Optional, if you already have an access token:
    accessToken: process.env.ACCESS_TOKEN,
  },
});

class MailerService {
  async sendConfirmationEmailTest(data) {
    console.log(
      'MailerService: confirmation email sent to: ' + JSON.stringify(data),
    );
  }

  async sendConfirmationEmail(data) {
    const domain = 'https://at-the-risk-of-feeling-dumb.vercel.app/';

    const info = await transporter.sendMail({
      from: '"At The Risk of Feeling Dumb" <atrofdmessage@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: 'Please, confirm your message.', // Subject line
      //text: 'Hello world?', // plain text body
      html: `
      <div>
        <h1 style="color: #E03D2E; font-family: sans-serif">AT THE RISK OF FEELING DUMB</h1>
        <b>Hey, ${data.name}. Hope you're doing well!</b>
        <p>First of all, thanks for using this platform. However, you still need to confirm
        the message sent to ${data.receiverEmail} by <a href="${domain}/confirm/${data.confirmHash}">clicking here</a>.</p>
        <p>Again, <b>thank you so much!</b>
        <p style="font-style: italic">J. Júnior.</p>
        </p>
      </div>`, // html body
    });
    console.log('Message sent: %s', info.messageId);
    console.log('MailerService - confirmation e-mail sent to: ' + data.email);
  }

  async sendAnswerToSender(data) {
    const means =
      data.receiverResponse == 'accepted' ? 'knows' : "doesn't knows";
    const info = await transporter.sendMail({
      from: '"At The Risk of Feeling Dumb" <atrofdmessage@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: 'Hey, just to update you!', // Subject line
      //text: 'Hello world?', // plain text body
      html: `
      <div>
        <h1 style="color: #E03D2E; font-family: sans-serif">AT THE RISK OF FEELING DUMB</h1>
        <b>Hey, <b>${data.email}</b>. Hope you're doing well, again.</b>
        <p>The message request you sent to ${data.receiverEmail} was ${data.receiverResponse}. It means that your friend ${means} you sent the message.</p>
        <p>Again, thank you so much for trying this platform.</p>
      </div>`, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('MailerService - message sent to receiver: ' + data.email);
  }

  async sendRequestToReceiver(messageId, data) {
    const domain = 'https://at-the-risk-of-feeling-dumb.vercel.app/';

    const info = await transporter.sendMail({
      from: '"At The Risk of Feeling Dumb" <atrofdmessage@gmail.com>', // sender address
      to: data.receiverEmail, // list of receivers
      subject: 'Hey, there is someone who cares.', // Subject line
      //text: 'Hello world?', // plain text body
      html: `
      <div>
        <h1 style="color: #E03D2E; font-family: sans-serif">AT THE RISK OF FEELING DUMB</h1>
        <b>Hey, <b>${data.receiverEmail}</b>. Hope you're doing well, as well!</b>
        <p>You have a new message from someone that cares about you and possibly wants to talk. To see it, <a href="${domain}/message/${messageId}">click here</a></b>.
        <p style="font-style: italic">You can read the message and it's up to you choose between to accept or decline this proposal. Know that your sender will know your choice and
        you'll only be able to know it's identity if you accept.</p>
        <p>Clicking the link won't do nothing. Be free to visit the page and know more about the platform!</p>
        </p>
      </div>`, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('MailerService - message sent to receiver: ' + data.email);
  }
}

module.exports = new MailerService();
