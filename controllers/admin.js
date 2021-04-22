class AdminController {
  // TODO admin methods for delete/update shames and users
  // async updateUser(req, res) {
  //   try {
  //     const { id } = req.params;
  //     await models.user.update(req.body, { where: { id } });
  //     const userUpdated = await userService.getUserByParam({ id });
  //     const user = userService.formatUser(userUpdated);
  //     return res.status(200).json({ user });
  //   } catch (err) {
  //     return res.status(500).send({ message: err });
  //   }
  // }

  // async createUser(req, res) {
  //   try {
  //     const userCreated = await userService.createUser(req.body);
  //     if (userCreated) {
  //       return res.status(201).json(userCreated);
  //     }
  //     return res.status(400).send({ error: 'Data not formatted properly' });
  //   } catch (err) {
  //     return res.status(500).send({ message: err });
  //   }
  // }
}

const adminController = new AdminController();

module.exports = adminController;
