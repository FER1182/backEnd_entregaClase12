//index.js siempre tiene que tener solo configuraciones
const express = require("express");
const productosRoutes = require("./api/productos");
const router = require("./routes/index");

const app = express();
const port = process.env.PORT || 8080

//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .


app.set("view engine" ,"ejs")
app.set("views","./views")
app.use("/api/productos",productosRoutes);

//data
let msn = [];

//para servidor en la nube

//archivos estaticos
//app.use(express.static(__dirname + "/public"));

//server
const http = require("http");
const server = http.createServer(app);

//socket IO
const { Server, Socket } = require("socket.io");
const io = new Server(server);

//Conection Socket
    //el metodo on sirve para escuchar eventos
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
