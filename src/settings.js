const api = {
    listen: {
        callback: (port) => console.log(`[API] :: Listening on port: ${port}`)
    },
    port: process.env.PORT || 3000
};

const database = {
    mongodb: {
        cluster: process.env.MONGODB_CLUSTER,
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
        orm: {
            mongoose: {
                connect: {
                    callback: (baseUri) => console.log(`[DATABASE] :: Connected to MongoDB database: ${baseUri}`)
                },
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

const error = {
    catch: {
        callback: error => console.log(error)
    }
}

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
    database,
    error,
    middleware
};
