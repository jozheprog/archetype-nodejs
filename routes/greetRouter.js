/**
 * Fichero de subindice para rutas de saludo
 */

// Llama dependencias de libreria
const express = require('express');
const router = express.Router();

// Llamada dependencia ficheros
const greetsController = require('../controller/greetController');

/**
 * Llamada get
 */
router.get('/', (req, res, next) => greetsController.greetByName(req, res, next));

module.exports = router;