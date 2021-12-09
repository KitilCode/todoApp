const { client } = require("../twilioConstants");
const flowObject = require("../twilioFlowObject");
require("dotenv").config();

console.log(process.env.FLOW_SID);
//console.log(client);

let update = client.studio
  .flows(process.env.FLOW_SID)
  .update({
    commitMessage: "update create list redirect",
    definition: flowObject,
    status: "draft",
  })
  .then((flow) => console.log(flow.friendlyName));

update = client.studio
  .flows(process.env.FLOW_SID)
  .update({
    commitMessage: "update create list redirect",
    definition: flowObject,
    status: "published",
  })
  .then((flow) => console.log(flow.friendlyName));

// debugging
// console.log(update);
// console.log(
//     client.studio.flows(process.env.FLOW_SID)
//                  .update({commitMessage: 'update create list redirect', definition: flowObject, status: 'published'})
//                  .then(flow => console.log(flow))
// );

// client.studio.flows(process.env.FLOW_SID)
//              .fetch()
//              .then(flow => console.log(flow.friendlyName));

module.exports = update;
