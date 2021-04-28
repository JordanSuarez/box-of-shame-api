const jwt = require('jsonwebtoken');
const userService = require('./user');

const { JWT_SECRET_KEY } = process.env;

class JwtService {
  extractToken(req) {
    return req.headers.authorization.replace('Bearer ', '');
  }

  async getUserFromJwt(req) {
    const token = this.extractToken(req);
    const userId = jwt.verify(token, JWT_SECRET_KEY).id;
    return await userService.getUserByParam({ id: userId });
  }

  // async getUserRoleFromJwt(req) {
  //   const token = this.extractToken(req);
  //   const { isAdmin } = jwt.verify(token, JWT_SECRET_KEY);
  //   return (isAdmin === 1);
  // }
}

const jwtService = new JwtService();

module.exports = jwtService;
