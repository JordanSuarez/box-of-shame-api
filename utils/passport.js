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

passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
  return await models.user.findByPk(jwtPayload.id)
    .then((user) => done(null, user))
    .catch((err) => {
      done(err);
    });
}));

// passport.use(new JwtStrategy(jwtOptions, (async (jwtPayload, done) => {
//   const toto = await models.user.findByPk(jwtPayload.id, (err, user) => {
//     if (err) {
//       console.log(err);
//
//       return done(err, false);
//     }
//     return console.log(err, user);
//     // if (user) {
//     //   console.log(user, 'passss');
//     //
//     //   return done(null, user);
//     // }
//     // console.log(toto, 'falllllllseeee');
//     //
//     // return done(null, false);
//     // or you could create a new account
//   });
// })));
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
