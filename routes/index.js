/**
 * Archivo donde se encuentra el main de todas las rutas vs sus ficheros
 */

module.exports = app => {
    app.use('/saludo', require('./greetRouter'));
}
