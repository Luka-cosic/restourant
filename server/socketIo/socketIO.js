import { Server } from 'socket.io';


export const socketIO = (httpServer)=>{

     const io = new Server(httpServer,{
        cors: {
          origin: "*"
          
        }
      });


      io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
          io.emit('fromServer', msg);
        });
      
        socket.on('deleteCard', (msg) => {
          io.emit('fromServerDC', msg);
        });

        socket.on('bookTable', (msg) => {
          io.emit('fromServerBT', msg);
        });

        socket.on('deleteTable', (msg) => {
          console.log('server side on delete');
          
          io.emit('fromServerDT', msg);
        });
      
      });
}