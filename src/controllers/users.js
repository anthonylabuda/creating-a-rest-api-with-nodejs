import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Users from "../models/users.js";

const DELETE_USER_BY_ID = (req, res, next) => {
    const _id = req.params._id;

    Users.findByIdAndDelete({ _id })
        .exec()
        .then(() => res.status(200).json({ user: { _id } }))
        .catch(error => res.status(500).json({ error }));
};

const POST_USER_LOGIN = (req, res, next) => {
    const { email, password } = req.body;
    const user = { email };

    Users.find({ email })
        .exec()
        .then(users => {
            if (users.length !== 1) return res.status(401).json({ user });

            bcrypt.compare(password, users[0].password, (error, success) => {
                if (error) return res.status(500).json({ error });

                if (success) {
                    const { _id, email } = users[0];
                    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, { expiresIn: `1h` });
                    const user = { _id, email, token };

                    return res.status(200).json({ user });
                };

                res.status(401).json({ user });
            });
        })
        .catch(error => res.status(500).json({ error }));
};

const POST_USER_SIGNUP = (req, res, next) => {
    const { email, password } = req.body;
    const user = { email };

    Users.find({ email })
        .exec()
        .then(users => {
            if (users.length !== 0) return res.status(409).json({ user });

            bcrypt.hash(password, 10, (error, hashedPassword) => {
                if (error) return res.status(500).json({ error });

                const user = new Users({
                    _id: new mongoose.Types.ObjectId(),
                    email,
                    password: hashedPassword
                });

                user.save()
                    .then(user => res.status(201).json({ user }))
                    .catch(error => res.status(500).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

export default {
    DELETE_USER_BY_ID,
    POST_USER_LOGIN,
    POST_USER_SIGNUP
};
