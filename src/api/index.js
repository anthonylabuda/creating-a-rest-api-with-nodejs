import express from "express";
import morgan from "morgan";
import routes from "./routes";

const api = express();

api.use(morgan("dev"));

api.use("/orders", routes.orders);
api.use("/products", routes.products);
api.use("/status", routes.status);

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
