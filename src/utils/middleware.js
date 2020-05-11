import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import settings from "../settings.js";

export default (api) => {
    api.use(express.json());
    api.use(express.urlencoded(settings.middleware.express.urlencode.options));
    api.use(compression());
    api.use(cors())
    api.use(helmet());
    api.use(mongoSanitize());
    api.use(morgan(settings.middleware.morgan.format));
    api.use(rateLimit(settings.middleware.rateLimit.options));
};
