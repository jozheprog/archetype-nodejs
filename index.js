/**
 * Fichero main que inicializa la aplicacion y levanta puerto
 */

// Llama dependencias de libreria
const express = require('express');
const bodyParser = require('body-parser');

// Llama dependencia de archivo
const { server } = require('./config');

// Instancia aplicacion
const app = express();

// Instancia fichero con las rutas
const routes = require('./routes');

// Permiso para utilizar json en body
app.use(bodyParser.json());

// Se desliga responsabilidad a routes quien se encarga de enrutar los endpoint
routes(app);

// Llama aplicacion y levanta el puerto
app.listen(server.port, () => {
    console.log(`Aplicacion escuchando en puerto ${server.port}`);
});