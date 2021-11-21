const userHelpers = require('../helpers/userHelpers')


const findUser = async (req, res) => {
    const user = await helpers.findUser(req.body.From);
    console.log(
        `Incoming Message from ${user.firstName}: ${req.body.Body}`
    );
    const response = new MessagingResponse();
    const message = response.message();
    message
        .body(`Welcome ${user.firstName} to the Todo app`);
    console.log(response.toString())
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(response.toString());

}

module.exports= {
    findUser,
}