const {client} = require('../twilioConstants');
const flowObject = require('../twilioFlowObject');
require('dotenv').config();

const update = 
    client.studio.flows(process.env.FLOW_SID)
                 .update({commitMessage: 'update welcome redirect', definition: flowObject, status: 'published'})
                 .then(flow => console.log(flow.friendlyName));

module.exports = update;