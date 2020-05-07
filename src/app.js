const express = require("express");
const routes = require("./api/routes");

const app = express();

app.use('/orders', routes.orders);
app.use('/products', routes.products);

module.exports = app;
