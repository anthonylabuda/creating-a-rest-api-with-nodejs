import express from "express";
import routes from "./api/routes";

const app = express();

app.use('/orders', routes.orders);
app.use('/products', routes.products);

export default app;
