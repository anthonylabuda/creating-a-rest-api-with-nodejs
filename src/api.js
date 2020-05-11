import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import settings from "./settings.js";
import routerMiddleware from "./middleware/router.js";

const api = express();
const db = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}-f2yue.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.set(`useCreateIndex`, true);
mongoose.set(`useFindAndModify`, false);
mongoose.set(`useNewUrlParser`, true);
mongoose.set(`useUnifiedTopology`, true);
mongoose.connect(db, () => console.log(`[DATABASE] :: Connected to MongoDB Atlas database`));

api.use(express.json());
api.use(express.urlencoded(settings.middleware.express.urlencode.options));
api.use(compression());
api.use(cors())
api.use(helmet());
api.use(morgan(settings.middleware.morgan.format));
api.use(rateLimit(settings.middleware.rateLimit.options));

routerMiddleware(api);

api.listen(settings.api.port, () => console.log(`[API] :: Listening on port: ${settings.api.port}`));
