import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

import orderRoutes from "./routes/order.js";
import productRoutes from "./routes/product.js";
import statusRoutes from "./routes/status.js";
import userRoutes from "./routes/user.js";

const api = express();
const db = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}-f2yue.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(db);

api.use(morgan("dev"));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

api.use(cors())

api.use(`/uploads`, express.static(`uploads`));

api.use("/orders", orderRoutes);
api.use("/products", productRoutes);
api.use("/status", statusRoutes);
api.use("/users", userRoutes);

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
