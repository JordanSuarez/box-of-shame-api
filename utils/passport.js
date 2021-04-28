const passport = require('passport');
const passportJWT = require('passport-jwt');
const models = require('../models');

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use(new JwtStrategy(
  jwtOptions,
  async (jwtPayload, done) => await models.user.findByPk(jwtPayload.id)
    .then((user) => done(null, user))
    .catch((err) => {
      done(err);
    }),
));

module.exports = passport;
