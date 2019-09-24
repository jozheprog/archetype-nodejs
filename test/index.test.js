/**
 * Se escriben las distintas pruebas para corroborar
 * al momento de realizar una modificacion, no ha roto
 * nada del proyecto
 */

const config = require('../config');

test('Aplicacion levanta puerto 8080 ', () => {
    expect(config.server.port).toBe("8080");
});