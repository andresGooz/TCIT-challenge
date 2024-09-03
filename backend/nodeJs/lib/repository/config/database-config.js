const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost', // Puede ser 'localhost' o '127.0.0.1' si estás accediendo desde la misma máquina
    port: 5432,        // El puerto expuesto por el contenedor de Docker
    database: 'nodejs', // El nombre de la base de datos que has definido en Docker
    user: 'root',      // El usuario que has definido en Docker
    password: 'admin'  // La contraseña que has definido en Docker
});

module.exports = db;
