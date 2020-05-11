import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

import orderRouter from "./routes/order.js";
import productRouter from "./routes/product.js";
import statusRouter from "./routes/status.js";

const api = express();
const db = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}-f2yue.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(db);

api.use(morgan("dev"));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

api.use(cors())

api.use("/orders", orderRouter);
api.use("/products", productRouter);
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
