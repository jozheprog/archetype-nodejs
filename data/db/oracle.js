const oracledb = require('oracledb');

/**
 * Identificando tipo de objeto para conexion
 * @typedef {object} connection
 * @property {string} connection.user
 * @property {string} connection.pconnectionsword
 * @property {string} connection.connectString
 * @property {number} connection.poolMax
 * @property {number} connection.poolMin
 * @property {number} connection.poolIncrement
 * @property {number} connection.poolTimeout
 */

/**
 * Creacion de pool de conexión para ocupar mas tarde
 * @param {connection} schema
 */
const createPool = async function (schema) {
    return new Promise((resolve, reject) => {
        oracledb.createPool(schema, function (err, pool) {
            try {
                if (err) {
                    console.log("ERROR: ", new Date(), ": createPool() callback: " + err.message);
                    resolve(false);
                }

                let poolName = `${schema.user}pool`.toLocaleUpperCase();

                global[poolName] = pool;

                resolve(true);
            } catch (error) {
                console.log('Vaya! algo que no se controló al crear Pool de conexion :', error);
                resolve(false);
            }
        });
    });
}

/**
 * Ejecuta una sentencia SQL en un esquema especifico, inicializado anteriormente con createPool
 * @param {string} statement Sentencia SQL a ejecutar
 * @param {connection} schema Objeto de conexion
 */
const execute = async function (statement, schema) {
    let conn;

    try {
        oracledb.autoCommit = true;
        const poolName = `${schema.user}pool`.toLocaleUpperCase();
        let pool = global[poolName];

        conn = await pool.getConnection();

        const result = await conn.execute(statement, [], { outFormat: oracledb.OBJECT });

        return result.rows;
    } catch (err) {
        console.log(`Ouch! ${err}. Statement: ${statement}`);
        return false;
    } finally {
        conn.release(function (err) {
            if (err) {
                console.log("ERROR: Unable to RELEASE the connection: ", err);
            }
            return;
        });
    }
}

/**
 * Ejecuta una sentencia PLSQL en un esquema especifico, iniciado antteriormente con createPool
 * @param {string} procedimiento Procedimiento, funcion o package a ejecutar
 * @param {array} variables Variables que deba de pasarse a bloque PLSQL
 * @param {connection} schema Objeto de conexion
 */
const executePLSQL = async function (procedimiento, variables, schema) {
    let conn;

    try {
        oracledb.autoCommit = true;
        const poolName = `${schema.user}pool`.toLocaleUpperCase();
        let pool = global[poolName];

        conn = await pool.getConnection();

        let res = await conn.execute(procedimiento, variables);

        return res.outBinds;

    } catch (err) {
        console.log(`Ouch! ${err}. Procedimiento: ${procedimiento}. Variables: ${variables}`);
        return false;
    } finally {
        conn.release(function (err) {
            if (err) {
                console.log("ERROR: Unable to RELEASE the connection: ", err);
            }
            return;
        });
    }
}

module.exports = {
    createPool,
    execute,
    executePLSQL
};

