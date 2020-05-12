const api = {
    port: process.env.PORT || 3000
};

const database = {
    mongodb: {
        cluster: process.env.MONGODB_CLUSTER,
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
        orm: {
            mongoose: {
                options: {
                    useCreateIndex: true,
                    useFindAndModify: false,
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            }
        }
    }
};

const middleware = {
    express: {
        urlencode: {
            options: { extended: false }
        }
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        sign: {
            options: {
                expiresIn: `1h`
            }
        }
    },
    morgan: {
        format: `dev`
    },
    multer: {
        options: {
            fileFilter: {
                mimetypes: [`image/jpeg`, `image/png`]
            },
            limits: {
                fileSize: 1024 * 1024 * 5
            },
            storage: {
                destination: `./uploads/`,
                filename: (originalName) => `${new Date().toISOString()}_${originalName}`
            }
        }
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
    database,
    middleware
};
