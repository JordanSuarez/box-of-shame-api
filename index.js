require('dotenv').config();

const cors = require('cors');
const app = require('./app.js');

const port = process.env.API_PORT;
app.set('port', port);

app.use(cors());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Credentials', 'true');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE');
  response.header('Access-Control-Expose-Headers', 'X-Total-Count');
  next();
});

app.listen(port);

module.exports = app;
