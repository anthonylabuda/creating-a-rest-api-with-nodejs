const api = {
    port: process.env.PORT || 3000
};

const middleware = {
    express: {
        urlencode: {
            options: { extended: false }
        }
    },
    morgan: {
        format: `dev`
    },
    rateLimit: {
        options: {
            max: 5,
            windowMs: 1 * 60 * 1000
        }
    }
};

export default {
    api,
    middleware
};
