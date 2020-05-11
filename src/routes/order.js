import express from "express";
import mongoose from "mongoose";
import Order from "../models/order.js";

const router = express.Router();

// -------------------------
// /orders
// -------------------------
router.get(`/`, (req, res, next) => {
    Order.find()
        .exec()
        .then(orders => res.status(200).json({ count: orders.length, orders }))
        .catch(error => res.status(500).json({ error }));
});

router.post(`/`, (req, res, next) => {
    const order = new Order({
        ...req.body,
        _id: new mongoose.Types.ObjectId()
    });

    order.save()
        .then(order => res.status(201).json({ order }))
        .catch(error => res.status(500).json({ error }));
});

// -------------------------
// /orders/:_id
// -------------------------
router.delete(`/:_id`, (req, res, next) => {
    const _id = req.params._id;

    Order.remove({ _id })
        .exec()
        .then(() => res.status(200).json({ order: { _id } }))
        .catch(error => res.status(500).json({ error }));
});

router.get(`/:_id`, (req, res, next) => {
    const _id = req.params._id;

    Order.findById(_id)
        .exec()
        .then(order => res.status(200).json({ order }))
        .catch(error => res.status(500).json({ error }));
});

export default router;
