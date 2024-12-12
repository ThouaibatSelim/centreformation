//import 
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");

//app type express
const app = express();

//connexion base de données
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
    //afficher la liste des formations depuis la base de données
    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log(erreur);
        } else{
            connection.query("SELECT * FROM formations", [], (err, resultat) => {
                if (err){
                    console.log(err);
                } else {
                    console.log("resultat: ", resultat);
                    res.render("formations", {resultat});
                }
            })
        }
    })
});

//Route Partenaires
app.get("/partenaires", (req, res) => {
//afficher la liste des partenaires depuis la base de données
    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log(erreur);
        } else{
            connection.query("SELECT * FROM partenaires WHERE id = 1", [], (err, resultat) => {
                if (err){
                    console.log(err);
                } else {
                    console.log("resultat: ", resultat);
                    res.render("partenaires", {resultat});
                }
            
                })
            }
        })
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

//Route Etudiants
app.get("/etudiants", (req, res) => {

    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log(erreur);
        } else{
            connection.query("SELECT * FROM inscription", [], (err, resultat) => {
                if (err){
                    console.log(err);
                } else {
                    console.log("resultat: ", resultat);
                    res.render("etudiants", {resultat});
                }
            
                })
            }
        })
    });

    //MODIFIER
app.post("/new", (req, res) => {
    //afficher le corps de ma requête
    console.log("Corps requête BODY", req.body);
    console.log("Corps requête NOM", req.body.nom);
    console.log("Corps requête PRENOM", req.body.prenom);
    console.log("Corps requête DATE DE NAISSANCE", req.body.date_naissance);
    console.log("Corps requête GENRE", req.body.genre);
   
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let date_naissance = req.body.date_naissance;
    let genre = req.body.genre;
    let id = req.body.id;
    let requeteSQL;

    //si id vide --> id = null
    if(req.body.id === "") { 
        id = null;
        requeteSQL = "INSERT INTO inscription (id_client, nom_client, prenom_client, date_naissance, genre_client) VALUES (?,?,?,?,?)";
    } else{
            id = req.body.id;
        requeteSQL = "UPDATE thes SET nom_client = ?, prenom_client = ?, date_naissance = ?, genre_client t = ? WHERE id_client = ?";
        }

        //Ordre des données
        let ordreDonnees;
        if (id === null) {
        ordreDonnees = [null, nom, prenom, date_naissance, genre];
        } else {
        ordreDonnees = [nom, prenom, date_naissance, genre, id];
        }

    //enregistrer dans la base de données
    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log(erreur);
        } else {
            connection.query(requeteSQL, ordreDonnees, (err, resultat) => {
                if (err) {
                    console.log(err);
                } else {
                console.log("Insertion Réussie!");
                res.status(300).redirect("etudiants");
            }

            }
)}  
    })
});

app.delete ("/new/:id", (req, res) => { //méthode delete

    let idThe = req.params.id; //récupère l'id à partir de l'objet params

    //supprimer de la base de données
    req.getConnection((erreur, connection) => {
        if(erreur) { //si erreur
            console.log(erreur);
        } else { // sinon supprimer
            connection.query("DELETE FROM inscription WHERE id_client = ?", 
                [idThe], (err, result) => {
                if (err) {
                    console.log(err);
                } else { //afficher résultat sur la page
                console.log("Suppression Réussie!");
                res.status(200).json({routeRacine: "/etudiants"});
            }

            }
)}  
    })
});




module.exports = app;