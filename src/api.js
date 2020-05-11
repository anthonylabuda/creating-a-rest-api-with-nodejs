import express from "express";

import settings from "./settings.js";
import applyDatabase from "./utils/database.js";
import applyMiddleware from "./utils/middleware.js";
import applyRouter from "./utils/router.js";

const api = express();

applyDatabase();
applyMiddleware(api);
applyRouter(api);

api.listen(settings.api.port, () => console.log(`[API] :: Listening on port: ${settings.api.port}`));
