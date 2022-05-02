//index.js siempre tiene que tener solo configuraciones
const express = require("express");
const router = require("./routes/index");

const app = express();
//data
let msn = [];

//para servidor en la nube

const port = process.env.PORT || 8080

//archivos estaticos
app.use(express.static(__dirname + "/public"));

//server
const http = require("http");
const server = http.createServer(app);

//socket IO
const { Server, Socket } = require("socket.io");
const io = new Server(server);

//Conection Socket
io.on("connection", (socket) => {
  console.log("un usuario se conecto");
  socket.emit("mensage_back", msn); //sirve para emitir mensajes

  //escuchar eventos de mensajes
  socket.on("dataMsn", (data) => {
    msn.push(data);
    //socket.emit("mensage_back",msn)
    //escuchar varios socket a la vez
    io.sockets.emit("mensage_back",msn)

    });
});

//Routes

app.use("/api", router);

server.listen(port, () => {
  console.log("server oks");
});
