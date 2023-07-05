const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Importación de rutas y asignación de prefijos
app.use("/categories", require("./routes/categories"));
app.use("/products", require("./routes/products"));

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
    