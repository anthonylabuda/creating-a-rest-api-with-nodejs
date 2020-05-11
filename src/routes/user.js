import bcrypt from "bcrypt";
import express from "express";
import mongoose from "mongoose";
import User from "../models/user.js";

const router = express.Router();

// -------------------------
// /users/:id
// -------------------------
router.delete(`/:_id`, (req, res, next) => {
    const _id = req.params._id;

    User.remove({ _id })
        .exec()
        .then(() => res.status(200).json({ user: { _id } }))
        .catch(error => res.status(500).json({ error }));
});

// -------------------------
// /users/signup
// -------------------------
router.post(`/signup`, (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.find({ email })
        .exec()
        .then(user => {
            if (user.length >= 1) return res.status(409).json({ user: { email } });

            bcrypt.hash(password, 10, (error, hash) => {
                if (error)
                    return res.status(500).json({ error });

                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    email: email,
                    password: hash
                });

                user.save()
                    .then(user => res.status(201).json({ user }))
                    .catch(error => res.status(500).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
});

export default router;
