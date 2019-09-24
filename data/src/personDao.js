const { createPool, execute } = require('../db/oracle');
const { format } = require('sqlstring');

const { db } = require('../../config');

/**
 * Obtiene el nombre de la persona a quien consultar. (Ejemplo absurdo, solo para archetype)
 * @param {string} nombre Nombre de persona a quien se desea saludar
 */
const getByName = async nombre => {
    const statement = format(`SELECT ? as "name" FROM DUAL`, [nombre]);

    return await execute(statement, db.ora.example);
}

module.exports = {
    getByName
};
