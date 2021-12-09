const todoListHelpers = require("../helpers/todoListHelpers");
const {
  client,
  MessagingResponse,
  redirectURL,
} = require("../twilioConstants");

const twilioCreateList = async (req, res) => {
  // create todolist
  const todoList = await todoListHelpers.createList(
    req.query.title,
    req.query.phone_number
  );
  console.log(`${todoList.title} list has been created`);

  // send message to user
  await client.messages.create({
    direction: "outbound-api",
    body: `list ${todoList.title} has been created`,
    from: "+19038294100",
    to: req.query.phone_number,
    redirect: redirectURL,
  });

  // make sure http request is success
  const twiml = new MessagingResponse();
  twiml.message("successful http request");
  console.log(twiml);
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
};

module.exports = {
  twilioCreateList,
};
