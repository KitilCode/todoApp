const flowObject = require('./config/flow.json');
const {ngrokURL} = require('./twilioConstants');

// set varaiables for widgets to make code more readable 
let trigger = flowObject.states[0];
let welcome = flowObject.states[1];

// edit widgets 
welcome.properties.url = ngrokURL + '/welcome';

module.exports = flowObject;