import express from "express";
import mongoose from "mongoose";
import authenticate from "../middleware/authentication.js";
import Order from "../models/order.js";

const router = express.Router();

// -------------------------
// /orders
// -------------------------
router.get(`/`, authenticate, (req, res, next) => {
    Order.find()
        .populate(`product`)
        .exec()
        .then(orders => res.status(200).json({ count: orders.length, orders }))
        .catch(error => res.status(500).json({ error }));
});

router.post(`/`, authenticate, (req, res, next) => {
    const { product, quantity } = req.body;

    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        product,
        quantity
    });

    order.save()
        .then(order => res.status(201).json({ order }))
        .catch(error => res.status(500).json({ error }));
});

// -------------------------
// /orders/:_id
// -------------------------
router.delete(`/:_id`, authenticate, (req, res, next) => {
    const _id = req.params._id;
    const order = { _id };

    Order.findByIdAndDelete(_id)
        .exec()
        .then(() => res.status(200).json({ order }))
        .catch(error => res.status(500).json({ error }));
});

router.get(`/:_id`, authenticate, (req, res, next) => {
    const _id = req.params._id;

    Order.findById(_id)
        .populate(`product`)
        .exec()
        .then(order => res.status(200).json({ order }))
        .catch(error => res.status(500).json({ error }));
});

export default router;
