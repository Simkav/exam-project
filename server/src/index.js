const http = require('http')
require('./server/dbMongo/mongoose');
const controller = require('./socketInit');
const createApp = require('./app')
const PORT = process.env.PORT || 3000;

const app = createApp()

const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);

controller.createConnection(server);
