const flowObject = require('./config/flow.json');
const {ngrokURL} = require('./twilioConstants');

// set varaiables for widgets to make code more readable 
let trigger = flowObject.states[0];
let welcome = flowObject.states[1];
let welcomeFail = flowObject.states[2];
let options = flowObject.states[3];
let optionsSplit = flowObject.states[4];
let isUserActive = flowObject.states[5];
let isUserActiveSplit = flowObject.states[6];
let noSuchOption = flowObject.states[7];
let optionsFail = flowObject.states[8]
let createListTitle = flowObject.states[9];
let createList = flowObject.states[10];

// edit widgets 
welcome.properties.url = ngrokURL + '/welcome';
createList.properties.url = ngrokURL + '/todoList';


module.exports = flowObject;