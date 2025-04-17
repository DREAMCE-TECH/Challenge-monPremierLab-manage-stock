// Importation du module express
const express = require('express');

// Création d'un routeur express
const router = express.Router();

// Importation de la fonction getAllUsers depuis le service userService
const { getAllUsers } = require('../../services/userService');

// Route pour récupérer un message de bienvenue
// Cette route est redondante avec la suivante, donc elle est supprimée pour éviter les conflits
// router.get('/', (req, res) => {
//     res.json({ message: 'Liste des utilisateurs' });
// });

// Route pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        // Appel de la fonction getAllUsers pour obtenir la liste des utilisateurs
        const users = await getAllUsers();
        // Envoi de la liste des utilisateurs en réponse
        res.json(users);
    } catch (error) {
        // Gestion des erreurs et envoi d'un message d'erreur
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
});

// Exportation du routeur pour l'utiliser dans d'autres fichiers
module.exports = router;