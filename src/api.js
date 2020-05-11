import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

import OrdersRoutes from "./routes/orders.js";
import ProductsRoutes from "./routes/products.js";
import StatusRoutes from "./routes/status.js";
import UsersRoutes from "./routes/users.js";

const api = express();
const db = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}-f2yue.mongodb.net/test?retryWrites=true&w=majority`;
const rateLimitOptions = { max: 5, windowMs: 1 * 60 * 100 };

mongoose.set(`useCreateIndex`, true);
mongoose.set(`useFindAndModify`, false);
mongoose.set(`useNewUrlParser`, true);
mongoose.set(`useUnifiedTopology`, true);
mongoose.connect(db);

api.use(compression());
api.use(helmet());
api.use(morgan(`dev`));
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(cors())
api.use(rateLimit(rateLimitOptions));

api.use(`/uploads`, express.static(`uploads`));
api.use(`/orders`, OrdersRoutes);
api.use(`/products`, ProductsRoutes);
api.use(`/status`, StatusRoutes);
api.use(`/users`, UsersRoutes);

api.use((req, res, next) => {
    const error = new Error(`Not Found`);

    error.status = 404;

    next(error);
});

api.use((error, req, res, next) => {
    res.status(error.status || 500).json({ error });
});

export default api;
