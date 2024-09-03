const postService = require('../service/postService');


class PostController {
    async getAll(req, res) {
        const posts = await postService.getAll();
        res.json(posts);
    }

    async getById(req, res) {
        const post = await postService.getById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('post not found');
        }
    }

    async getByName(req, res) {
        const posts = await postService.getByName(req.params.name);
        if (posts) {
            res.json(posts);
        }
        else {
            res.status(404).send('Post not found');
        }
    }

    async create(req, res) {
        const post = await postService.create(req.body);
        res.status(201).json(post);
    }

    async update(req, res) {
        const post = await postService.update(req.params.id, req.body);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('post not found');
        }
    }


    async delete(req, res) {
        await postService.delete(req.params.id);
        res.status(204).send();
    }
}

module.exports = new PostController();
