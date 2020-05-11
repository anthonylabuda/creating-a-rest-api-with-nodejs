import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import ordersRouter from "./routes/orders.js";
import productsRouter from "./routes/products.js";
import statusRouter from "./routes/status.js";

const api = express();

api.use(morgan("dev"));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

api.use(cors())

api.use("/orders", ordersRouter);
api.use("/products", productsRouter);
api.use("/status", statusRouter);

api.use((req, res, next) => {
    const error = new Error("Not Found");

    error.status = 404;

    next(error);
});

api.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        "message": error.message
    });
});

export default api;
