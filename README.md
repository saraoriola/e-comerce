# e-Commerce

API REST para una Tienda Online (E-commerce) con Node.js, Express y MySQL/Sequelize
## Índice

1. [Introducción](#introducción)
2. [Descripción](#descripción)
3. [Requisitos del Proyecto](#requisitos-del-proyecto)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Endpoints](#endpoints)
6. [Extra](#extra)
7. [Entregables](#entregables)

## Introducción

En este proyecto, hemos desarrollado una API REST para una tienda online (E-commerce) utilizando tecnologías como Node.js, Express y MySQL/Sequelize. Esta API permite a los usuarios registrar cuentas, autenticarse, realizar operaciones CRUD en productos y categorías, así como gestionar pedidos. 

Implementamos funcionalidades esenciales como encriptación de contraseñas, generación de tokens JWT para la autenticación, y relaciones entre tablas para asegurar una experiencia completa y segura para los usuarios. 

A través de este proyecto, hemos buscado crear una solución robusta y escalable para potenciales comercios electrónicos, brindando una base sólida para el desarrollo de futuras aplicaciones de comercio electrónico.
## Descripción

Explicación detallada del proyecto, sus objetivos y funcionalidades principales. También menciona el enfoque en la creación de una API REST utilizando las tecnologías node + express, mysql/sequelize, y los aspectos requeridos como el registro y autenticación de usuarios, CRUD de productos y categorías, relaciones entre tablas, uso de seeders, etc.

## Requisitos del Proyecto

- Uso de ramas con Git, con la existencia de las ramas "master" o "main" y "develop".
- Presentación de un excelente README.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL
- Sequelize
- Bcrypt
- JWT
- Multer (en caso de implementarlo)

Breve explicación de las tecnologías utilizadas en el proyecto.

## Endpoints

A continuación se detallan los diferentes endpoints implementados en la API:

- Productos
  - CRUD productos
  - Endpoint para crear un producto
  - Endpoint para actualizar un producto
  - Endpoint para eliminar un producto
  - Endpoint para traer productos con sus categorías
  - Endpoint para traer un producto por su id
  - Filtros para buscar producto por nombre y precio
  - Filtro para ordenar los productos de mayor a menor precio

- Categorías
  - CRUD categorías
  - Endpoint para crear una categoría
  - Endpoint para actualizar una categoría
  - Endpoint para eliminar una categoría
  - Endpoint para ver todas las categorías con sus productos
  - Endpoint para traer una categoría por su id
  - Filtro para buscar categoría por nombre

- Pedidos
  - Endpoint para ver los pedidos con los productos que contienen
  - Endpoint para crear pedidos

- Usuarios
  - Endpoint para registrar un usuario utilizando bcrypt
  - Endpoint para realizar login utilizando bcrypt + JWT
  - Endpoint para obtener información del usuario conectado con sus pedidos y productos
  - Endpoint para realizar logout

- Seeders
  - Creación de 5 productos mediante un seeder

## Extra

En caso de haber implementado las funcionalidades adicionales, aquí se pueden listar y explicar brevemente.

## Entregables

- Repositorio en GitHub: [Enlace al repositorio](URL_DEL_REPOSITORIO)
- Otros entregables requeridos
