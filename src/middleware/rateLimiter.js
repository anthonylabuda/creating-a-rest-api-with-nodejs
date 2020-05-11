import rateLimiter from "express-rate-limit";

export default () => {
    const options = {
        max: 5,
        windowMs: 1 * 60 * 1000
    };

    return rateLimiter(options);
};
