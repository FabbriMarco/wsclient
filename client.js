const Websocket = require("ws"); 
const prompt=rewuire("prompt-sync")({sigint: true});
const ServerAddress="ws://127.0.0.1:5000";

const socket= new WebSocket(ServerAddress);

socket.on("open",function(){

   const messaggio=prompt("INSERISCI UN MESSAGGIO:");
   socket.send(messaggio);

})
  


socket.on("message", function (msg){
   console.log("hai ricevuto dal server:+msg")
   const txt=prompt("Inserisci un messaggio")
   socket.send(txt)

})
