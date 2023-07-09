"use strict";

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: await bcrypt.hash ("password123",10),
        address: "123 Main St",
        role: "customer",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        password: await bcrypt.hash ("securepass",10),
        address: "456 Elm St",
        role: "admin",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Michael",
        lastName: "Johnson",
        email: "michaeljohnson@example.com",
        password: await bcrypt.hash ("mysecretpassword",10),
        role: "customer",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Emily",
        lastName: "Brown",
        email: "emilybrown@example.com",
        password: await bcrypt.hash ("12345678",10),
        address: "987 Pine St",
        role: "customer",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "William",
        lastName: "Miller",
        email: "williammiller@example.com",
        password: await bcrypt.hash ("password",10),
        address: "654 Cedar St",
        role: "admin",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Olivia",
        lastName: "Davis",
        email: "oliviadavis@example.com",
        password: await bcrypt.hash("secretpass", 10),
        address: "321 Birch St",
        role: "customer",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "James",
        lastName: "Anderson",
        email: "jamesanderson@example.com",
        password: await bcrypt.hash("pass123", 10),
        address: "111 Maple St",
        role: "customer",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Sophia",
        lastName: "Wilson",
        email: "sophiawilson@example.com",
        password:  await bcrypt.hash("mysecretpass", 10),
        address: "222 Oak St",
        role: "customer",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Benjamin",
        lastName: "Taylor",
        email: "benjamintaylor@example.com",
        password: await bcrypt.hash("password1234", 10),
        address: "333 Elm St",
        role: "customer",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Ava",
        lastName: "Johnson",
        email: "avajohnson@example.com",
        password:  await bcrypt.hash("securepassword", 10),
        address: "444 Pine St",
        role: "customer",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ]
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },

  
};