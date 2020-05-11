import mongoose from "mongoose";

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

const User = mongoose.model(`User`, schema);

export default User;
