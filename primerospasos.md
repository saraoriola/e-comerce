npm init -y
npm i
npm install -D nodemon
sequelize init

sequelize db:create
sequelize db:migrate



  logoutUser: (req, res) => {
    // Aquí puedes implementar la lógica para cerrar sesión, como invalidar el token JWT o limpiar las cookies de autenticación. Esta implementación depende de tu configuración específica.
    // Por ejemplo:
    // req.logout(); // Si estás utilizando Passport.js
    // res.clearCookie('token'); // Si estás utilizando cookies para almacenar el token JWT

    res.json({ message: 'Cierre de sesión exitoso' });
  },
