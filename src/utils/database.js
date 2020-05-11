import mongoose from "mongoose";

import settings from "../settings.js";

export default () => {
    const baseUri = `${settings.database.mongodb.cluster}-f2yue.mongodb.net/test`;
    const uri = `mongodb+srv://${settings.database.mongodb.username}:${settings.database.mongodb.password}@${baseUri}?retryWrites=true&w=majority`;

    mongoose.connect(uri, settings.database.mongodb.orm.mongoose.options)
        .then(() => console.log(`[DATABASE] :: Connected to MongoDB database: ${baseUri}`))
        .catch(error => console.log(error));
};
