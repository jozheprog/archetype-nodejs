/**
 * Fichero de subindice para rutas de saludo
 */

// Llama dependencias de libreria
const express = require('express');
const router = express.Router();

/**
 * Llamada get
 */
router.get('/', (req, res, next) => {
    res.json({
        "Saludo": "Hola!"
    });
});

module.exports = router;