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
        const { name, description } = user;
        const data = await db.one(
            `INSERT INTO your_schema_name.post (name, description) 
             VALUES ($1, $2) 
             RETURNING *`,
            [name, description]
        );
        return data;
    }

    async update(id, user) {
        const { name, description } = user;
        const data = await db.oneOrNone(
            `UPDATE your_schema_name.post 
             SET name = $1, description = $2 
             WHERE id = $3 
             RETURNING *`,
            [name, description, id]
        );
        return data;
    }

    async delete(id) {
        const data = await db.oneOrNone(
            `DELETE FROM your_schema_name.post 
             WHERE id = $1 
             RETURNING *`,
            [id]
        );
        return data;
    }
}

module.exports = new PostRepository();