"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        categoryName: "Football",
        description: "Discover a wide selection of products for football, from boots and balls to jerseys and accessories for fans. Find everything you need to play and enjoy the world's most popular sport.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        categoryName: "Running",
        description: "Explore our collection of products designed specifically for running. Find high-performance running shoes, breathable clothing, and essential accessories to help you achieve your sports goals.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        categoryName: "Basketball",
        description: "Discover a wide range of products for basketball, from sneakers and balls to jerseys and accessories for fans. Find everything you need to enjoy this exciting sport.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        categoryName: "Tennis",
        description: "Find everything you need to play tennis, from rackets and balls to clothing and accessories. Explore our selection of quality products to fully enjoy this elegant and demanding sport.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        categoryName: "Fitness",
        description: "Discover a wide variety of training and fitness products, from sports clothing and sneakers to specialized equipment and accessories. Find everything you need to stay in shape and achieve your health goals.",
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