import express from "express";
import routes from "./routes";

const api = express();

api.use('/orders', routes.orders);
api.use('/products', routes.products);

export default api;
