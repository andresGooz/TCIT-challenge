const postRepository = require('../repository/repositories/post.repository');


class PostService {
    getAll() {
        return postRepository.getAll();
    }

    getById(id) {
        return postRepository.getById(id);
    }

    getByName(name) {
        return postRepository.getByName(name);
    }

    create(post) {
        return postRepository.create(post);
    }

    update(id, post) {
        return postRepository.update(id, post);
    }

    delete(id) {
        return postRepository.delete(id);
    }
}

module.exports = new PostService();