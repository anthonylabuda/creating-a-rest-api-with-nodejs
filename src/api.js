import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

import rateLimiterMiddleware from "./middleware/rateLimiter.js";
import routerMiddleware from "./middleware/router.js";

const api = express();
const db = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}-f2yue.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.set(`useCreateIndex`, true);
mongoose.set(`useFindAndModify`, false);
mongoose.set(`useNewUrlParser`, true);
mongoose.set(`useUnifiedTopology`, true);
mongoose.connect(db);

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(compression());
api.use(cors())
api.use(helmet());
api.use(morgan(`dev`));

api.use(rateLimiterMiddleware());

routerMiddleware(api);

export default api;
