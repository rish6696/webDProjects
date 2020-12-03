const express = require('express');
const socket = require('socket.io');
const http = require('http');
const app = express();

const server = http.Server(app);
const io = socket(server);


io.on('connection',(socket)=>{
    console.log('socket  connected with  id'+ socket.id);

    socket.on('send_data',(data)=>{
        console.log("recieved data at server")
        socket.broadcast.emit('data_recvd',data);
    })
})



app.use('/',(req,res)=>{
    console.log("hello world");
    res.send("request recived");
})

server.listen(9876,()=>{
    console.log('server statted at the port 9876');
})