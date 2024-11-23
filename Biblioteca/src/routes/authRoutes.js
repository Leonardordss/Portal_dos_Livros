const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// A rota deve chamar a função 'register', não 'cadastro'
router.post('/cadastro', register);
router.post('/login', login);

module.exports = router;

