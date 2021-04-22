const jwt = require('jsonwebtoken');
const userService = require('./user');

const { JWT_SECRET_KEY } = process.env;

class JwtService {
  async getUserFromJwt(req) {
    const token = req.headers.authorization.replace('Bearer ', '');
    const userId = jwt.verify(token, JWT_SECRET_KEY).id;
    return await userService.getUserByParam({ id: userId });
  }
}

const jwtService = new JwtService();

module.exports = jwtService;
