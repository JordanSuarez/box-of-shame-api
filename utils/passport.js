// const { Strategy } = require('passport-local');
const passport = require('passport');
const passportJWT = require('passport-jwt');
// const bcrypt = require('bcryptjs');
const models = require('../models');

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use(new JwtStrategy(jwtOptions, (
  async (jwtPayload, done) => await models.user.findByPk(jwtPayload.id)
    .then((user) => done(null, user))
    .catch((err) => done(err))
)));

// passport.use(new Strategy({
//   usernameField: 'email',
// },
// ((email, password, done) => models.user.findOne({ email })
//   .then(async (user) => {
//     console.log(user, email, password);
//     if (await bcrypt.compare(password, user.password)) {
//       return done(null, user);
//     }
//     return done(null, false);
//   }).catch((err) => done(err))
// )));

module.exports = passport;
