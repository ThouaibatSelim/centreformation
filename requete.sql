-- Création de la base de données
CREATE DATABASE centre_formation; 

-- Changement de base de données
USE centre_formation;

-- Création des tables
CREATE TABLE accueil (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, phrase_accueil VARCHAR(4000), photo BLOB);

CREATE TABLE formations(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom_formation VARCHAR(155), niveau_formation VARCHAR(100));

CREATE TABLE partenaires(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom_partenaire VARCHAR(155), annee_partenariat INT);

CREATE TABLE contact(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, adresse_contact_stf VARCHAR(155), adresse_directrice_stf VARCHAR(155), numero_stf INT(12), adresse_postale_stf VARCHAR(155));

CREATE TABLE horaires(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, jour VARCHAR(155), ouverture TIME, fermeture TIME);

CREATE TABLE apropos(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, photo_equipe BLOB, presentation_centre VARCHAR(16383));

CREATE TABLE inscription(id_client INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom_client VARCHAR(155), prenom_client VARCHAR(155), date_naissance DATE, genre_client VARCHAR (100), adresse_client VARCHAR(155), numero_client VARCHAR(155), dernier_diplome VARCHAR(155), situation_pro VARCHAR(155), motdepasse VARCHAR(155));

CREATE TABLE connexion(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, adresse_client VARCHAR(155), motdepasse VARCHAR(155), id_client INT NOT NULL, FOREIGN KEY (id_client) REFERENCES inscription(id_client));

-- Insertion des données

--Accueil
INSERT INTO accueil (phrase_accueil) VALUES ("Le Centre de Formation STF Mayotte propose des formations diversifiées dans des secteurs clés tels que le web, le digital, le marketing, les ressources humaines, ainsi que le social et la santé. Ces formations visent à développer des compétences pratiques et professionnelles, adaptées aux besoins du marché local, afin de préparer les apprenants à réussir dans un marché en constante évolution. Construisez grâce à des formations innovantes, accessibles à tous les niveaux avec le centre STF Mayotte.");

INSERT INTO accueil (phrase_accueil) VALUES ("Notre centre de formation est présent dans plusieurs localités de l'île, pour être toujours au plus près de vous et de vos ambitions.");

--Formations
INSERT INTO formations (nom_formation, niveau_formation) VALUES ("Développeur Web (Full-Stack)", "(Bac+3)");

INSERT INTO formations (nom_formation, niveau_formation) VALUES ("Web Master", "(Bac+5)");

INSERT INTO formations (nom_formation, niveau_formation) VALUES ("Technicien Supérieur Système et Réseau", "(Bac+2)");

INSERT INTO formations (nom_formation, niveau_formation) VALUES ("Administrateur Système & Réseau", "(Bac+4)");

INSERT INTO formations(nom_formation, niveau_formation)  VALUES ("Data Analyst", "(Bac+3)");

INSERT INTO formations (nom_formation, niveau_formation) VALUES ("Cybersécurité", "(Bac+5)");

INSERT INTO formations (nom_formation, niveau_formation) VALUES ("Testeur de Logiciel", "(Bac+3)");


--partenaires
INSERT INTO partenaires (nom_partenaire, annee_partenariat) VALUES ("Conseil Départemental", 2016);

INSERT INTO partenaires (nom_partenaire, annee_partenariat) VALUES ("CHM", 2018);

INSERT INTO partenaires (nom_partenaire, annee_partenariat) VALUES ("Carif-Oref", 2017);

INSERT INTO partenaires (nom_partenaire, annee_partenariat) VALUES ("ARS", 2020);

--contact
INSERT INTO contact (adresse_contact_stf, adresse_directrice_stf, numero_stf, adresse_postale_stf) VALUES ("contact.stfmayotte@gmail.com", "mariamabacar123@hotmail.fr", 269777888, "72 rue STF, 97600 Mamoudzou");

--horaires

INSERT INTO horaires (jour, ouverture, fermeture) VALUES ("Lundi-jeudi", "08:00:00", "16:30:00");

INSERT INTO horaires (jour, ouverture, fermeture) VALUES ("Vendredi", "08:00:00", "15:00:00");

INSERT INTO horaires (jour, ouverture, fermeture) VALUES ("Samedi", "08:00:00", "12:00:00");

INSERT INTO horaires (jour, ouverture, fermeture) VALUES ("Dimanche", "00:00:00", "00:00:00");

--A propos

INSERT INTO apropos (presentation_centre) VALUES ("Le Centre de Formation STF Mayotte, fondé en 2016 par Mariama Bacar, s'est engagé à contribuer activement au développement économique et social de Mayotte en offrant des formations professionnelles dans des secteurs en pleine expansion. Son objectif principal est de répondre aux besoins croissants des entreprises locales tout en préparant les apprenants aux défis du marché du travail moderne. STF Mayotte se distingue par son approche innovante et son adaptation aux réalités locales. Mayotte, un territoire en pleine mutation, nécessite des compétences spécifiques dans des domaines stratégiques tels que le web, le digital, le marketing, les ressources humaines, ainsi que le secteur social et la santé. En proposant des formations de qualité dans ces secteurs, le centre offre aux jeunes et aux adultes une opportunité de se qualifier pour des emplois locaux ou internationaux, tout en renforçant la compétitivité économique de l'île. Les formations proposées couvrent un large éventail de domaines, à commencer par le web et le digital, où les apprenants acquièrent des compétences en développement web, gestion de projets numériques, et utilisation des outils numériques essentiels dans le monde professionnel d'aujourd'hui. En marketing, le centre propose des formations en marketing digital, stratégie de marque, ainsi que gestion des réseaux sociaux et des campagnes publicitaires en ligne. Le secteur des ressources humaines est également une priorité avec des programmes axés sur la gestion des talents, le recrutement, la gestion des conflits, ainsi que le développement des compétences. Enfin, les formations dans le domaine social et santé permettent aux participants de se spécialiser dans l'accompagnement des personnes vulnérables, la gestion des structures sanitaires et sociales, et la prise en charge des enjeux sociaux de la population. Le Centre de Formation STF Mayotte se veut un acteur clé dans l'accompagnement des professionnels de demain, avec une forte volonté de contribuer à la croissance durable et à l'épanouissement social de Mayotte. A ce jour nous avons des centres ouverts dans 12 communes sur les 17 communes de Mayotte. En favorisant l'accès à des formations adaptées aux besoins spécifiques du territoire, le centre permet à ses apprenants de s'épanouir et de participer pleinement au développement de l'île proche de chez eux.");


-- Inscription
INSERT INTO inscription (nom_client, prenom_client) VALUES ("Bacar", "Daoud");
INSERT INTO inscription (nom_client, prenom_client) VALUES ("Ali", "Hachim");
INSERT INTO inscription (nom_client, prenom_client) VALUES ("Houmadi","Fatima" );
INSERT INTO inscription (nom_client, prenom_client) VALUES ("Kamal", "Abdou");



UPDATE inscription SET date_naissance = "1999-02-15" WHERE id_client = 1;
UPDATE inscription SET date_naissance = "2001-12-12" WHERE id_client = 2;
UPDATE inscription SET date_naissance = "1998-04-18" WHERE id_client = 3;
UPDATE inscription SET date_naissance = "1989-11-27" WHERE id_client = 4;


UPDATE inscription SET genre_client = "Homme" WHERE id_client = 1;
UPDATE inscription SET genre_client = "Homme" WHERE id_client = 2;
UPDATE inscription SET genre_client = "Femme" WHERE id_client = 3;
UPDATE inscription SET genre_client = "Homme" WHERE id_client = 4;

