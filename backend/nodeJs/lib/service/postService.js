const postRepository = require('../repository/repositories/post.repository');

class PostService {
    getAll() {
        return postRepository.getAllUsers();
    }

    getById(id) {
        return postRepository.getUserById(id);
    }

    create(user) {
        return postRepository.createUser(user);
    }

    update(id, user) {
        return postRepository.updateUser(id, user);
    }

    delete(id) {
        return postRepository.deleteUser(id);
    }
}

module.exports = new PostService();