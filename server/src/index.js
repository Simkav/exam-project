const http = require('http');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./server/dbMongo/mongoose');
const router = require('./server/router');
const controller = require('./socketInit');
const handlerError = require('./server/handlerError/handler');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/api', router);
app.use(handlerError);

const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);

controller.createConnection(server);
