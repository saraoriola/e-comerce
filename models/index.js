'use strict';

// Import the required modules
const fs = require('fs'); // The File System module of Node.js. Used for working with the file system, in this case, for reading model files.
const path = require('path'); // The Path module of Node.js. Used for handling and manipulating file paths and directories.
const Sequelize = require('sequelize'); // The Sequelize library that provides an API for interacting with relational databases.

// Store the base name of the current file
const basename = path.basename(__filename);

// Get the current environment or use 'development' if not defined
const env = process.env.NODE_ENV || 'development';

// Read the database configuration based on the current environment
const config = require(__dirname + '/../config/config.json')[env];

// Create an empty object to store the database models
const db = {};

// Create a new Sequelize instance
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Read all model files in the current directory and load them into the db object
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      !file.includes('.test.js')
    );
  })
  .forEach(file => {
    // Load the model and associate it with the Sequelize instance
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associate all models with each other
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Assign the Sequelize instance and Sequelize module to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export the db object
module.exports = db;