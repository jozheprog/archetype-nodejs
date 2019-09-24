/**
 * Fichero main que inicializa la aplicacion y levanta puerto
 */

// Llama dependencias de libreria
const express = require('express');
const bodyParser = require('body-parser');

// Llama dependencia de archivo
const { server, db } = require('./config');
const ora = require('./data/db/oracle');

// Instancia aplicacion
const app = express();

// Instancia fichero con las rutas
const routes = require('./routes');

// Permiso para utilizar json en body
app.use(bodyParser.json());

// Se desliga responsabilidad a routes quien se encarga de enrutar los endpoint
routes(app);

const application = async () => {
    const oraExampleConnection = await ora.createPool(db.ora.example);

    if (!oraExampleConnection) {
        console.log("Favor verifique las variables de ambiente para el esquema EXAMPLE");
        return false;
    }

    // Llama aplicacion y levanta el puerto
    app.listen(server.port, async () => {
        console.log(`Aplicacion escuchando en puerto ${server.port}`);
    });
}

application();
