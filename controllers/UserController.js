const { User, Post } = require("../models/index.js");

const UserController = {
  create(req, res) {
    req.body.role = "user";
    User.create(req.body)
      .then((user) =>
        res.status(201).send({ message: "Usuario creado con éxito", user })
      )
      .catch((err) => console.error(err));
  },
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
  async delete(req, res) {
    try {
      //elimino el usuario
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      //elimino los posts del usuario
      await Post.destroy({
        where: {
          UserId: req.params.id,
        },
      });
      res.send("El usuario ha sido eliminado con éxito");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const user = await User.findByPk(req.params.id)
      res.send({message:"Usuario actualizado con éxito",user});
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = UserController;