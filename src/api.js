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

process.on(`uncaughtException`, (error) => {
    console.error(`[EXCEPTION] :: An uncaught Exception occurred; Shutting down API...`, error);
    process.exit(1);
});

process.on(`unhandledRejection`, (error) => {
    console.log(`[EXCEPTION] :: An unhandled Exception occurred; Shutting down API...`, error);
    server.close(() => process.exit(1));
});
