import jwt from "jsonwebtoken";

import settings from "../settings.js";

export const authenticate = (req, res, next) => {
    const token = req.headers.authorization.split(` `)[1];

    try {
        const decodedToken = jwt.verify(token, settings.middleware.jwt.secret);

        req.token = decodedToken;

        next();
    } catch (error) {
        return res.status(401).json({ token });
    }
};
