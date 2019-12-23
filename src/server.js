import "dotenv/config";
import express from 'express';
import UserController from './app/controllers/UserController';
import BullBoard from 'bull-board'
import Queues from './app/lib/Queue';

const server = express();
BullBoard.setQueues(Queues.queues.map(queue => queue.bull));

server.use(express.json());
server.post('/user', UserController.store);

server.use('/admin/queues', BullBoard.UI);

server.listen(3333, ()=>{
    console.log("Server running listen port 3333");
});

