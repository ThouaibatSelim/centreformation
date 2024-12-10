//import 
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");

//app type express
const app = express();

const connection = {
    host : 'localhost',
    user : 'root',
    password : 'mythouaiL9222',
    port : 3306,
    database : 'centre_formation'
};

//Middleware de connection
app.use(myConnection( mysql2, connection, "pool"));

//récuperer données form
app.use(express.urlencoded({extended: false}));

//Vues
app.set("views", "./views"); //emplacement
app.set("view engine", "ejs"); //moteur

app.use(express.static("public"));

//Route Accueil
app.get("/accueil", (req, res) => {
    //renvoyer la page accueil
        res.render("accueil");
    });

//Route Formations
app.get("/formations", (req, res) => {
    //renvoyer la page formations
        res.render("formations");
    });

//Route Partenaires
app.get("/partenaires", (req, res) => {
    //renvoyer la page formations
        res.render("partenaires");
    });

//Route Connexion
app.get("/connexion", (req, res) => {
    //renvoyer la page connexion
        res.render("connexion");
    });

//Route Inscription
app.get("/inscription", (req, res) => {
    //renvoyer la page inscription
        res.render("inscription");
    });

//Route Contact
app.get("/contact", (req, res) => {
    //renvoyer la page contact
        res.render("contact");
    });

//Route A propos
app.get("/apropos", (req, res) => {
    //renvoyer la page à propos de nous
        res.render("apropos");
    });

module.exports = app;