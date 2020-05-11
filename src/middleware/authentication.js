import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const token = req.headers.authorization.split(` `)[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.token = decodedToken;

        next();
    } catch (error) {
        return res.status(401).json({ token });
    }
};
