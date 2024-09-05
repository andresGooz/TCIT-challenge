const Post = require('../models/post.model');


class PostRepository {
  async getAll() {
    const data = await Post.findAll();
    return data;
  }

  async getById(id) {
    const data = await Post.findByPk(id);
    return data;
  }

  async getByName(name) {
    const data = await Post.findAll({
      where: { name },
    });
    return data;
  }

  async create(post) {
    const data = await Post.create(post);
    return data;
  }

  async update(id, post) {
    await Post.update(post, {
      where: { id },
    });
    const data = await Post.findByPk(id);
    return data;
  }

  async delete(id) {
    const data = await Post.findByPk(id);
    await Post.destroy({
      where: { id },
    });
    return data;
  }
}

module.exports = new PostRepository();
