const bcrypt = require('bcryptjs');
const isEmail = require('validator/lib/isEmail');
const models = require('../models');

const saltRounds = 10;

class UserService {
  async saveUser(userObject) {
    const salt = await bcrypt.genSalt(saltRounds);
    const password = await bcrypt.hash(userObject.password, salt);
    return {
      ...this.formatUser(userObject),
      password,
    };
  }

  formatUser(userObject) {
    return {
      id: userObject.id,
      username: userObject.username,
      email: userObject.email,
      shamesObtained: [],
    };
  }

  async getUserByParam(param) {
    return await models.user.findOne({
      where: param,
    });
  }

  async createUser({ email, password, username }) {
    // TODO Add validation properly
    if (!email || !isEmail(email) || !password || !username) {
      return false;
    }
    const newUser = await this.saveUser({ email, password, username });
    const user = await models.user.create(newUser);
    return this.formatUser(user);
  }
}

const userService = new UserService();

module.exports = userService;
