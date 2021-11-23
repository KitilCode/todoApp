const http = require('http')
const app  = require('../app.js');


const port = parseInt(process.env.PORT, 10) || 8626;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`listening on port ${port}`)
});