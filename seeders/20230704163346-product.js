"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        productName: "Nike Mercurial Superfly Football Boot",
        description: "The Nike Mercurial Superfly football boot offers the perfect combination of speed and control. Designed for the fastest players, it features innovative technology for exceptional performance on the field.",
        CategoryId: 1,
        price: "$199.99",
        stock: "10",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Air Zoom Pegasus Running Shoes",
        description: "The Nike Air Zoom Pegasus running shoes are ideal for runners of all levels. They provide soft and responsive cushioning, delivering comfort and performance with every step.",
        CategoryId: 2,
        price: "$129.99",
        stock: "15",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Elite Basketball",
        description: "The Nike Elite basketball is perfect for players seeking exceptional control and superior performance on the court. Crafted with durable and high-quality materials, it offers optimal grip and precise response.",
        CategoryId: 3,
        price: "$39.99",
        stock: "20",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Court Tennis Racket",
        description: "The Nike Court tennis racket is ideal for players of all levels. It offers a perfect combination of power and control, allowing for precise and effective shots on the court.",
        CategoryId: 4,
        price: "$179.99",
        stock: "8",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Pro Fitness Leggings",
        description: "The Nike Pro fitness leggings are perfect for your workouts. Made with breathable and stretchy fabric, they provide comfort and freedom of movement while you exercise.",
        CategoryId: 5,
        price: "$49.99",
        stock: "12",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Barcelona Football Jersey",
        description: "The Nike Barcelona football jersey is the perfect choice for fans of the team. Designed with the club's colors and crest, it allows you to proudly show your support for your favorite team.",
        CategoryId: 1,
        price: "$79.99",
        stock: "25",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Free Run Running Shoes",
        description: "The Nike Free Run running shoes offer a natural and lightweight feel while running. Their minimalist and flexible design allows for a comfortable and dynamic running experience.",
        CategoryId: 2,
        price: "$109.99",
        stock: "18",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Dominate Basketball",
        description: "The Nike Dominate basketball offers superior grip and exceptional durability. Designed for optimal performance on the court, it allows you to dominate the game.",
        CategoryId: 3,
        price: "$29.99",
        stock: "22",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Vapor Tennis Racket",
        description: "The Nike Vapor tennis racket is perfect for players seeking speed and maneuverability on the court. With its lightweight and aerodynamic design, it allows for powerful and precise shots.",
        CategoryId: 4,
        price: "$209.99",
        stock: "7",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Dri-FIT Fitness T-Shirt",
        description: "The Nike Dri-FIT fitness t-shirt keeps you cool and dry during your workouts. Made with high-tech sweat-wicking fabric, it provides comfort and performance with every move.",
        CategoryId: 5,
        price: "$34.99",
        stock: "15",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Grip3 Goalkeeper Gloves",
        description: "The Nike Grip3 goalkeeper gloves offer exceptional grip and protection for your hands. Designed with state-of-the-art technology, they provide confidence and performance on the field.",
        CategoryId: 1,
        price: "$89.99",
        stock: "12",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Air Zoom Structure Running Shoes",
        description: "The Nike Air Zoom Structure running shoes provide stability and support for runners with pronation. With responsive cushioning and a secure fit, they help you reach your running goals.",
        CategoryId: 2,
        price: "$139.99",
        stock: "10",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Versa Tack Basketball",
        description: "The Nike Versa Tack basketball offers superior grip and exceptional control. Designed for an optimal feel in the hands, it allows for precise passes and accurate shots.",
        CategoryId: 3,
        price: "$49.99",
        stock: "16",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Aero Tennis Racket",
        description: "The Nike Aero tennis racket is perfect for players seeking speed and maneuverability on the court. With its lightweight and aerodynamic design, it allows for powerful and precise shots.",
        CategoryId: 4,
        price: "$189.99",
        stock: "5",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Power Fitness Leggings",
        description: "The Nike Power fitness leggings offer support and style during your workouts. With their snug fit and compression fabric, they help improve your performance while looking great.",
        CategoryId: 5,
        price: "$54.99",
        stock: "10",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Real Madrid Football Jersey",
        description: "The Nike Real Madrid football jersey is a dream come true for any fan of the team. With its sleek design and the club's colors, it allows you to show unwavering support for Real Madrid.",
        CategoryId: 1,
        price: "$84.99",
        stock: "20",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike React Infinity Running Shoes",
        description: "The Nike React Infinity running shoes offer the perfect combination of cushioning and stability. Designed to help reduce injuries, they provide comfort and confidence with every step.",
        CategoryId: 2,
        price: "$149.99",
        stock: "14",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Hyper Elite Basketball",
        description: "The Nike Hyper Elite basketball is used by top players around the world. With its high-quality construction and advanced design, it allows for high-level gameplay.",
        CategoryId: 3,
        price: "$59.99",
        stock: "18",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Pro Staff Tennis Racket",
        description: "The Nike Pro Staff tennis racket is the choice of many tennis professionals. With its classic design and exceptional performance, it allows you to dominate the court like a true champion.",
        CategoryId: 4,
        price: "$229.99",
        stock: "6",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        productName: "Nike Sculpt Fitness Leggings",
        description: "The Nike Sculpt fitness leggings offer support and compression in all directions. With their sculpting design and breathable fabric, they help you sculpt your figure while exercising.",
        CategoryId: 5,
        price: "$64.99",
        stock: "12",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ]
    
    );
  },

  async down(queryInterface, Sequelize) {
  },
};