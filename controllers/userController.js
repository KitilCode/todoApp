const userHelpers = require('../helpers/userHelpers');
const {client, MessagingResponse ,redirectURL} = require('../twilioConstants');


const welcome = async (req, res) => {
    // find user
    const user = await userHelpers.findUser(req.query.phone_number);
    console.log(
        `Incoming Message from ${user.firstName}: ${req.query.body}`
    );

    // send message to send to user 
    await client.messages
                .create({
                        direction: 'outbound-api',
                        body: `Hi ${user.firstName}, welcome to the todo app`, 
                        from: '+19038294100', 
                        to: req.query.phone_number,
                        redirect: redirectURL,
                })
                .then(m => console.log(m.sid));

    // make sure http request is success
    const twiml = new MessagingResponse();
    twiml.message('successful http request');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

}

module.exports= {
    welcome,
}