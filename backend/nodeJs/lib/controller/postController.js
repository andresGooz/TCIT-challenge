const postService = require('../service/postService');


class PostController {
    async getAll(req, res) {
        const users = await postService.getAll();
        res.json(users);
    }

    async getById(req, res) {
        const user = await postService.getById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    }

    async getByName() {
        const posts = await postService.getByName(req.params.name);
        if (posts) {
            res.json(posts);
        }
        else {
            res.status(404).send('Post not found');
        }
    }

    async create(req, res) {
        const user = await postService.create(req.body);
        res.status(201).json(user);
    }

    async update(req, res) {
        const user = await postService.update(req.params.id, req.body);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    }


    async delete(req, res) {
        await postService.delete(req.params.id);
        res.status(204).send();
    }
}

module.exports = new PostController();
