import express from "express";

import settings from "./settings.js";
import initializeDatabase from "./utils/database.js";
import initializeMiddleware from "./utils/middleware.js";
import initializeRouter from "./utils/router.js";

const api = express();

initializeDatabase();
initializeMiddleware(api);
initializeRouter(api);

api.listen(settings.api.port, () => console.log(`[API] :: Listening on port: ${settings.api.port}`));

process.on(`uncaughtException`, (error) => {
    console.error(`[EXCEPTION] :: An uncaught Exception occurred; Shutting down API...`, error);
    process.exit(1);
});

process.on(`unhandledRejection`, (error) => {
    console.error(`[EXCEPTION] :: An unhandled Exception occurred; Shutting down API...`, error);
    server.close(() => process.exit(1));
});
