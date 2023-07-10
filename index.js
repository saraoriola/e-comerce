const express = require('express');
const app = express();
const { typeError } = require('./middleware/error');
const PORT = 3000;

// Middleware
app.use(express.json());

// Route import and prefix assignment
app.use('/categories', require('./routes/categories'));
app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users'));
app.use('/orders', require('./routes/orders'));

// Error handling
app.use(typeError);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
