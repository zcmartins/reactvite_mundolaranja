// backend/routes/jogadorRoutes.js

const express = require('express');
const router = express.Router();
const jogadorController = require('../controllers/jogadorController');

// Rotas para jogadores
router.get('/', jogadorController.obterTodosJogadores);
router.get('/:id', jogadorController.obterJogadorPorId);
// Adicione outras rotas conforme necessário (ex: criar, atualizar, excluir jogadores)

module.exports = router;
