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

    create(user) {
        return postRepository.create(user);
    }

    update(id, user) {
        return postRepository.update(id, user);
    }

    delete(id) {
        return postRepository.delete(id);
    }
}

module.exports = new PostService();