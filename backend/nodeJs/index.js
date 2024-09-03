
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


app.get('/posts', (req, res) => PostController.getAll(req, res));//OK
app.get('/posts/id/:id', (req, res) => PostController.getById(req, res));//OK
app.get('/posts/name/:name', (req, res) => PostController.getByName(req, res));//OK
app.post('/posts', (req, res) => PostController.create(req, res));//OK
app.put('/posts/:id', (req, res) => PostController.update(req, res));
app.delete('/posts/:id', (req, res) => PostController.delete(req, res));//OK

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
