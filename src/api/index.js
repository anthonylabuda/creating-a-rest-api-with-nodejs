import express from "express";
import morgan from "morgan";
import routes from "./routes";

const api = express();

api.use(morgan('dev'));

api.use('/orders', routes.orders);
api.use('/products', routes.products);

export default api;
