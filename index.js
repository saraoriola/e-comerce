const express = require('express');
const app = express();
const {typeError} = require('./middleware/errors');
const PORT = 3000;

// Middleware
app.use(express.json());

// Importación de rutas y asignación de prefijos
app.use('/categories', require('./routes/categories'));
app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users'));
app.use("/orders", require("./routes/orders"));

//M. Errors
app.use(typeError)

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
