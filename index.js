// Importation du module express pour créer une application web
const express = require('express');

// Création d'une instance de l'application express
const app = express();

// Définition du port sur lequel le serveur va écouter
const PORT = 3000;

// Importation des routes utilisateur depuis le fichier correspondant
const userRoutes = require('./src/routes/userRoutes');

// Middleware pour analyser les requêtes avec un corps JSON
app.use(express.json());

// Middleware pour utiliser les routes utilisateur sous le chemin '/users'
app.use('/users', userRoutes);

// Définition de la route GET pour la racine ('/') de l'application
app.get('/', (req, res) => {
    // Envoi d'une réponse JSON avec un message de bienvenue
    res.json({ message: 'Bienvenue sur mon API REST !' });
});

// Démarrage du serveur sur le port défini
app.listen(PORT, () => {
    // Affichage d'un message dans la console pour indiquer que le serveur est démarré
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});