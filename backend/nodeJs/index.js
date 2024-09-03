
const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });
const PostController = require('./lib/controller/postController');
const PostControllerInterface = require('./interfaces/index-repository-post.interface');

const checkValidityPluggin = require('./helpers/checkValidityPluggin');
checkValidityPluggin(PostController, PostControllerInterface);


app.get('/posts', (req, res) => PostController.getAll(req, res));
app.get('/posts/:id', (req, res) => PostController.getById(req, res));
app.get('/posts/:name', (req, res) => PostController.getByName(req, res));
app.post('/posts', (req, res) => PostController.create(req, res));
app.put('/posts/:id', (req, res) => PostController.update(req, res));
app.delete('/posts/:id', (req, res) => PostController.delete(req, res));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
