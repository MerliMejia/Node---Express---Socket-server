//Imports
import express from 'express';
import bodyparser from 'body-parser';
import 'reflect-metadata';
import http from 'http';
import cors from 'cors';

//Server initialization
const app = express();
const httpServer = http.createServer(app);
var io = require('socket.io')(httpServer);
const port = 5000;

//Middlewares
app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyparser.json());

//Socket
io.on('connection', (socket: any) => {
  console.log('a user connected');
});

httpServer.listen(port, async () => {
  console.log(`RUNNING ON PORT ${port}`);
});
