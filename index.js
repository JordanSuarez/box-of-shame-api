const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const path = require('path');
const http = require('http');
const cors = require('cors');
const models = require('./models');

const port = process.env.API_PORT;
const app = express();
app.use(bodyParser.json());

app.use(cors());
app.set('port', port);
// app.use('/', userRouter);
const userController = require('./controllers/user');

app.get('/toto', userController.getUsers);
// const apiRouter = require('./apiRouter').router;
// const userRouter = require('./routes/user');
// const shameRouter = require('./routes/shame');

// app.use(bodyParser.urlencoded({
//   extended: false,
// }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use((request, response, next) => {
//   response.header('Access-Control-Allow-Origin', '*');
//   response.header('Access-Control-Allow-Credentials', true);
//   response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE');
//   response.header('Access-Control-Expose-Headers', 'X-Total-Count');
//   next();
// });
// app.use('/', shameRouter);

// const server = http.createServer(app);
models.sequelize.sync().then(() => {
  console.log('toto');
  app.listen(port, () => {
    console.log('pass');
  });
});

module.exports = app;
// server.listen(port);
