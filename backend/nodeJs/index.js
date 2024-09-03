
const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });
const RepositoryPostImpl = require('./lib/repository/repositories/post.repository');
const RepositoryPostInterface = require('./interfaces/index-repository-post.interface');
const repositoryPost = new RepositoryPostImpl();

const checkValidityPluggin = require('./helpers/checkValidityPluggin');
checkValidityPluggin(repositoryPost, RepositoryPostInterface);

app.get('/create/posts', async (req, res) => {
  const { posts } = req.body;
  repositoryPost.create(posts);
  res.send();
})
app.get('/get/posts', async (req, res) => {
  repositoryPost.get();
  res.send();
})
app.get('/delete/posts', async (req, res) => {
  const { postsIds } = req.body;
  repositoryPost.delete(postsIds);
  res.send();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  