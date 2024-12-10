const http = require('http');
const app = require("./app.js");

//Port 4000
const numPort = 4000;
// app.set("port", numPort);

//
const date = new Date;
let jour = date.toLocaleDateString();
let heure = date.toLocaleTimeString();

//création du serveur avec http
const server = http.createServer(app);

//écoute du port
server.listen(numPort, () => {
    console.log(`Le serveur est activé au port : ${numPort}, le ${jour}, à ${heure}`);
});