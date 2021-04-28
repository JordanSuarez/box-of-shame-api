const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const passport = require('./utils/passport');
const jwtService = require('./services/jwt');
const specs = require('./utils/swagger');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const blameRoutes = require('./routes/blame');
const userBlameRoutes = require('./routes/userBlame');
const adminRoutes = require('./routes/admin');

// Auth
app.use('/', authRoutes);
// User
app.use('/users', passport.authenticate('jwt', { session: false }), userRoutes);
// Blame
app.use('/blames', passport.authenticate('jwt', { session: false }), blameRoutes);
// User blame
app.use('/pick-a-blame', passport.authenticate('jwt', { session: false }), userBlameRoutes);
// Admin
app.use('/protected', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (user) {
      if (user.dataValues.isAdmin === 1) {
        return adminRoutes(req, res, next);
      }
      return res.status(403).send({ error: 'Permission refused' });
    }
    return res.status(404).send({ error: '404 not found' });
  })(req, res);
});

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// 404
app.use((req, res) => {
  res.status(404);
  res.send('404 not found');
});

module.exports = app;
