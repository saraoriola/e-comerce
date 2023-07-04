const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/database");

// Middleware
app.use(express.json());

// Importación de rutas y asignación de prefijos
app.use("/users", require("./routes/users"));
app.use("/categories", require("./routes/categories"));
app.use("/products", require("./routes/products"));
app.use("/reviews", require("./routes/reviews"));
app.use("/shoppingCart", require("./routes/shoppingCart"));
app.use("/orders", require("./routes/orders"));

// Endpoint para crear la base de datos
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});


// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
