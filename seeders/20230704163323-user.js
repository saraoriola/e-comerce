"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "password123",
        address: "123 Main St",
        role: "customer"
      },
      {
        name: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        password: "securepass",
        address: "456 Elm St",
        role: "admin"
      },
      {
        name: "Michael",
        lastName: "Johnson",
        email: "michaeljohnson@example.com",
        password: "mysecretpassword",
        address: "789 Oak St",
        role: "customer"
      },
      {
        name: "Emily",
        lastName: "Brown",
        email: "emilybrown@example.com",
        password: "12345678",
        address: "987 Pine St",
        role: "customer"
      },
      {
        name: "William",
        lastName: "Miller",
        email: "williammiller@example.com",
        password: "password",
        address: "654 Cedar St",
        role: "admin"
      },
      {
        name: "Olivia",
        lastName: "Davis",
        email: "oliviadavis@example.com",
        password: "secretpass",
        address: "321 Birch St",
        role: "customer"
      },
      {
        name: "James",
        lastName: "Anderson",
        email: "jamesanderson@example.com",
        password: "pass123",
        address: "111 Maple St",
        role: "customer"
      },
      {
        name: "Sophia",
        lastName: "Wilson",
        email: "sophiawilson@example.com",
        password: "mysecretpass",
        address: "222 Oak St",
        role: "customer"
      },
      {
        name: "Benjamin",
        lastName: "Taylor",
        email: "benjamintaylor@example.com",
        password: "password1234",
        address: "333 Elm St",
        role: "customer"
      },
      {
        name: "Ava",
        lastName: "Johnson",
        email: "avajohnson@example.com",
        password: "securepassword",
        address: "444 Pine St",
        role: "customer"
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