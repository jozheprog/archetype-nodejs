# archetype-nodejs
---

Arquetipo de Nodejs

Creado por [Jose Sepulveda](https://www.linkedin.com/in/jose-miguel-sepulveda-10ab2a175/)


Arquetipo de Nodejs con instancia a base de datos Oracle, con el fin de simplificar y agilizar la programacion

## Links

Tecnologias utilizadas

- Oracledb: <https://github.com/oracle/node-oracledb>
- SqlString: <https://github.com/mysqljs/sqlstring>
- Express: <https://github.com/expressjs/express>
- Body-Parser <https://github.com/expressjs/body-parser>

#### Desarrollo

- Jest: <https://github.com/facebook/jest>
- Dotenv: <https://github.com/motdotla/dotenv>
- Nodemon: <https://github.com/remy/nodemon>
- Axios: <https://github.com/axios/axios>

## Requisitos

1. Instalacion de dependencias

  Para caso LOCAL

  ```bash
  npm install
  ```


2. Configurar variables de encotro

Crear fichero `.env` y copiar los datos de `.env.example`. Remplazar los valores con las configuraciones asociadas a su ambiente. No te preocupes por cambio `.gitignore` evitara que se genere push a gitlab.

```javascript
# Fichero ejemplo de las variables de entorno para trabajar localmente (Recordar crear fichero .env con las variables)

# Ejecutar como
NODE_ENV=development

# Puerto por defecto a levantar aplicacion
PORT=8080

# Datos de conexion para schema EXAMPLE
ND_DB_ORA_EXAMPLE_USER=user
ND_DB_ORA_EXAMPLE_PASSWORD=password
ND_DB_ORA_EXAMPLE_CONNECTION=host:port/sid
ND_DB_ORA_EXAMPLE_POOL_MAX=10
ND_DB_ORA_EXAMPLE_POOL_MIN=2
ND_DB_ORA_EXAMPLE_POOL_INCREMENT=1
ND_DB_ORA_EXAMPLE_POOL_TIMEOUT=30000
```

## Correr aplicacion localmente

> Esta aplicacion necesita de una instancia de base de datos Oracle

1. Correr aplicacion localmente

   ```bash
   npm run dev
   ```

2. Abrir browser en <http://localhost:8080/saludo?name=Yo>

## Configuracion YAML Openshift

    containers:
            - env:
                - name: NODE_ENV
                value: production
                - name: PORT
                value: 8080
                - name: ND_DB_ORA_EXAMPLE_USER
                value: usuario de esquema example en Oracle
                - name: ND_DB_ORA_EXAMPLE_PASSWORD
                value: password de esquema example en Oracle
                - name: ND_DB_ORA_EXAMPLE_CONNECTION
                value: conexion de de esquema example en Oracle
                - name: ND_DB_ORA_EXAMPLE_POOL_MAX
                value: pool maximo de esquema example en Oracle
                - name: ND_DB_ORA_EXAMPLE_POOL_MIN
                value: pool minimo de esquema example en Oracle
                - name: ND_DB_ORA_EXAMPLE_POOL_INCREMENT
                value: incremento de pool para esquema example en Oracle
                - name: ND_DB_ORA_EXAMPLE_POOL_TIMEOUT
                value: timeout de conexion esquema example en Oracle
