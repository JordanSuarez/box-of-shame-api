const bcrypt = require('bcryptjs');

const saltRounds = 10;

class UserService {
  async formatUser(userObject) {
    const salt = await bcrypt.genSalt(saltRounds);
    const password = await bcrypt.hash(userObject.password, salt);
    return {
      username: userObject.username,
      email: userObject.email,
      password,
    };
  }
}

const userService = new UserService();

module.exports = userService;
