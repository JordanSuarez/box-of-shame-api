class UserService {
  formatUser(userObject) {
    return {
      id: userObject.id,
      username: userObject.username,
      password: userObject.password,
      email: userObject.email,
    };
  }
}

const userService = new UserService();

module.exports = userService;
