const bcrypt = require('bcrypt');
const { User, Order, Product, Token } = require('../models/index.js');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const UserController = {
  async registerUser(req, res) {
    const { name, lastName, email, password, address } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }

      // Generate hashed password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user
      const user = await User.create({
        name,
        lastName,
        email,
        password: hashedPassword,
        address,
      });

      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering the user' });
    }
  },

  async loginUser(req, res) {
    const { email, password } = req.body;

    try {
      // Check if the user exists
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).send({ message: 'Incorrect username or password' });
      }

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send({ message: 'Incorrect username or password' });
      }

      // Generate the JWT token
      const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });

      res.json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error logging in' });
    }
  },

  async getUserProfile(req, res) {
    const userId = req.user.id;

    try {
      // Get the user's profile
      const user = await User.findByPk(userId, {
        attributes: ['name', 'lastName', 'email', 'address'],
        include: [
          {
            model: Order,
            attributes: ['id', 'totalPrice'],
            include: [
              {
                model: Product,
                attributes: ['id', 'productName', 'price'],
              },
            ],
          },
        ],
      });

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting user profile' });
    }
  },

  async logout(req, res) {
    try {
      const token = req.headers.authorization;

      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token },
          ],
        },
      });

      res.send({ message: 'You have been successfully logged out' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error trying to log out' });
    }
  },
};

module.exports = UserController;
