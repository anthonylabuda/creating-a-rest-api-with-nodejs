import express from "express";
import mongoose from "mongoose";

import settings from "./settings.js";
import applyMiddleware from "./utils/middleware.js"
import applyRouter from "./utils/router.js";

const api = express();
const db = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}-f2yue.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.set(`useCreateIndex`, true);
mongoose.set(`useFindAndModify`, false);
mongoose.set(`useNewUrlParser`, true);
mongoose.set(`useUnifiedTopology`, true);
mongoose.connect(db, () => console.log(`[DATABASE] :: Connected to MongoDB Atlas database`));

applyMiddleware(api);
applyRouter(api);

api.listen(settings.api.port, () => console.log(`[API] :: Listening on port: ${settings.api.port}`));
