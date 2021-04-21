const passport = require('passport');
const passportJWT = require('passport-jwt');
const models = require('../models');

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET_KEY;

// lets create our strategy for web token
const strategy = new JwtStrategy(jwtOptions, (async (jwtPayload, done) => {
  // console.log(jwtOptions.secretOrKey)
  const user = models.user.findByPk(jwtPayload.id);
  if (user) {
    return await done(null, user);
  }
  return await done(null, false);
}));

passport.use(strategy);

module.exports = passport;
