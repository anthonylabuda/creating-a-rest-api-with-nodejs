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

const generateToken = (_id, email) => {
    const payload = { _id, email };

    return jwt.sign(payload, settings.middleware.jwt.secret, settings.middleware.jwt.sign.options);
};

export default {
    generateToken
};
