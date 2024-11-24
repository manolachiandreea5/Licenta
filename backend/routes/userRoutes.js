

const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// Ruta pentru înregistrare
router.post('/register', createUser);

// Ruta pentru autentificare
router.post('/login', loginUser);

module.exports = router;