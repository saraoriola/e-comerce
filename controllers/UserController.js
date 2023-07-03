const { User, Post } = require("../models/index.js");

const UserController = {
  // Create a new user
  create(req, res) {
    req.body.role = "user";
    User.create(req.body)
      .then((user) =>
        res.status(201).send({ message: "User created successfully", user })
      )
      .catch((err) => console.error(err));
  },
  // Get all users with associated Post data
  getAll(req, res) {
    User.findAll({
      include: [Post],
    })
      .then((users) => res.send(users))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
  // Delete a user and their posts
  async delete(req, res) {
    try {
      // Delete the user
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      // Delete the posts of the user
      await Post.destroy({
        where: {
          UserId: req.params.id,
        },
      });
      res.send("User has been successfully deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  // Update a user
  async update(req, res) {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const user = await User.findByPk(req.params.id);
      res.send({ message: "User updated successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = UserController;
