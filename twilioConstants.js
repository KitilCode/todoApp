require('dotenv').config();

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const ngrokURL = 'https://b21a-2603-6010-8d02-cf91-404a-c3ea-12ee-f331.ngrok.io';
const redirectURL = `https://webhooks.twilio.com/v1/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Flows/${process.env.FLOW_SID}?FlowEvent=return`;

module.exports = {
   client,
   MessagingResponse,
   ngrokURL,
   redirectURL
}