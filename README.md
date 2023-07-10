# 🌐 e-Commerce

RESTful API for an e-commerce store using Node.js, Express, and MySQL/Sequelize

## 📝 Table of Contents

1. [Introduction](#introduction)
2. [Description](#description)
3. [Project Requirements](#project-requirements)
4. [Technologies Used](#technologies-used)
5. [Endpoints](#endpoints)
6. [Extras](#extras)
7. [Deliverables](#deliverables)

## 📌 Introduction

In this project, we have developed a RESTful API for an e-commerce store using technologies such as Node.js, Express, and MySQL/Sequelize. This API allows users to register accounts, authenticate, perform CRUD operations on products and categories, and manage orders.

## 📄 Description

Detailed explanation of the project, its objectives, and main functionalities. Also, mention the focus on creating a RESTful API using technologies like node + express, mysql/sequelize, and the required aspects like user registration and authentication, CRUD operations for products and categories, table relationships, use of seeders, etc.

## 🎯 Project Requirements

- Usage of branches with Git, with the existence of "master" or "main" and "develop" branches.
- Presentation of an excellent README.

## 💻 Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize
- Bcrypt
- JWT
- Multer (if implemented)

Brief explanation of the technologies used in the project.

## 🌐 Endpoints

The following are the different endpoints implemented in the API:

- Products
  - CRUD operations for products
  - Endpoint to create a product
  - Endpoint to update a product
  - Endpoint to delete a product
  - Endpoint to retrieve products with their categories
  - Endpoint to retrieve a product by its ID
  - Filters to search for a product by name and price
  - Filter to sort products by price from highest to lowest

- Categories
  - CRUD operations for categories
  - Endpoint to create a category
  - Endpoint to update a category
  - Endpoint to delete a category
  - Endpoint to view all categories with their products
  - Endpoint to retrieve a category by its ID
  - Filter to search for a category by name

- Orders
  - Endpoint to view orders with the products they contain
  - Endpoint to create orders

- Users
  - Endpoint to register a user using bcrypt
  - Endpoint to log in using bcrypt + JWT
  - Endpoint to retrieve information of the logged-in user with their orders and products
  - Endpoint to log out

- Seeders
  - Creation of 5 products through a seeder

## 🚀 Extras

List and briefly explain any additional functionalities implemented, if any.

## 📦 Deliverables

- GitHub Repository: [Link to the repository](REPOSITORY_URL)
- Other required deliverables
