import express from "express";

import Orders from "../routes/orders.js";
import Products from "../routes/products.js";
import Status from "../routes/status.js";
import Users from "../routes/users.js";

export default (api) => {
    api.use(`/uploads`, express.static(`uploads`));

    api.use(`/orders`, Orders);
    api.use(`/products`, Products);
    api.use(`/status`, Status);
    api.use(`/users`, Users);

    api.use((req, res, next) => {
        const error = new Error(`Not Found`);

        error.status = 404;

        next(error);
    });

    api.use((error, req, res, next) => {
        res.status(error.status || 500).json({ error });
    });
};
