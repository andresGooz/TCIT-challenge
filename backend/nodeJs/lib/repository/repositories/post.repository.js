/*
Funcionalidades aplicación web hecha con React y Redux
1. Insertar posts
2. Eliminar posts
3. Listar posts
4. Filtrar posts por nombre localmente
*/
const db = require('../config/database-config');
const Post = require('../models/post.model');

class PostRepository {
    async getAll() {
        const data = await db.any('SELECT * FROM your_schema_name.post');
        return data;
    }

    async getById(id) {
        const data = await db.oneOrNone('SELECT * FROM your_schema_name.post WHERE id = $1', [id]);
        return data;
    }

    async getByName(name) {
        const data = await db.oneOrNone('SELECT * FROM your_schema_name.post WHERE name = $1', [name]);
        return data;
    }

    async create(user) {
        const { name, email } = user;
        const row = await db.one(
            'INSERT INTO users(name, email) VALUES($1, $2) RETURNING id, name, email',
            [name, email]
        );
        return new Post(row.id, row.name, row.email);
    }

    async update(id, user) {
        const { name, email } = user;
        const row = await db.oneOrNone(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email',
            [name, email, id]
        );
        if (row) {
            return new Post(row.id, row.name, row.email);
        }
        return null;
    }

    async delete(id) {
        return await db.none('DELETE FROM users WHERE id = $1', [id]);
    }
}

module.exports = new PostRepository();



/*
const db = require('../config/db');
const User = require('../models/userModel');

class PostRepository {
    async getAllUsers() {
        const data = await db.any('SELECT * FROM users');
        return data.map(row => new User(row.id, row.name, row.email));
    }

    async getUserById(id) {
        const row = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [id]);
        if (row) {
            return new User(row.id, row.name, row.email);
        }
        return null;
    }

    async createUser(user) {
        const { name, email } = user;
        const row = await db.one(
            'INSERT INTO users(name, email) VALUES($1, $2) RETURNING id, name, email',
            [name, email]
        );
        return new User(row.id, row.name, row.email);
    }

    async updateUser(id, user) {
        const { name, email } = user;
        const row = await db.oneOrNone(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email',
            [name, email, id]
        );
        if (row) {
            return new User(row.id, row.name, row.email);
        }
        return null;
    }

    async deleteUser(id) {
        return await db.none('DELETE FROM users WHERE id = $1', [id]);
    }
}

module.exports = new PostRepository();


*/