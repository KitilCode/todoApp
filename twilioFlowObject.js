const flowObject = require('./config/flow.json');
const twilioConstants = require('./twilioConstants');

// set varaiables for widgets to make code more readable 
let trigger = flowObject.states[0];
let welcome = flowObject.states[1];

// edit widgets 
welcome.properties.url = twilioConstants.ngrokURL + '/welcome';

module.exports = flowObject;