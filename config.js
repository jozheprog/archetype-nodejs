/**
 * Fichero donde se alojan las configuraciones centralizadas
 */

module.exports = {
    server: {
        port: process.env.PORT || "8080"
    },
    db: {
        ora: {
            example: {
                user: process.env.ND_DB_ORA_EXAMPLE_USER,
                password: process.env.ND_DB_ORA_EXAMPLE_PASSWORD,
                connectString: process.env.ND_DB_ORA_EXAMPLE_CONNECTION,
                poolMax: parseInt(process.env.ND_DB_ORA_EXAMPLE_POOL_MAX),
                poolMin: parseInt(process.env.ND_DB_ORA_EXAMPLE_POOL_MIN),
                poolIncrement: parseInt(process.env.ND_DB_ORA_EXAMPLE_POOL_INCREMENT),
                poolTimeout: parseInt(process.env.ND_DB_ORA_EXAMPLE_POOL_TIMEOUT)
            }
        }
    }
};
