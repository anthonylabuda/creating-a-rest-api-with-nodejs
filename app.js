const express = require("express");
const orderRoutes = require("./api/routes/orders");
const productRoutes = require("./api/routes/products");

const app = express();

app.use('/orders', orderRoutes);
app.use('/products', productRoutes);

module.exports = app;
