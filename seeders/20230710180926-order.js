'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Orders", [
      {
        userId: 1,
        totalPrice: 50.99,
        totalQuantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        totalPrice: 75.50,
        totalQuantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        totalPrice: 30.25,
        totalQuantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Orders', null, {});
     */
  },
};

