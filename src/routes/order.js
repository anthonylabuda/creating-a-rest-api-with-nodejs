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
        .then(orders => res.status(200).json(orders))
        .catch(error => res.status(500).json({ error }));
});

router.post(`/`, (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        quantity: req.body.quantity
    });

    order.save()
        .then(order => res.status(201).json(order))
        .catch(error => res.status(500).json({ error }));
});

// -------------------------
// /orders/:id
// -------------------------
router.delete(`/:_id`, (req, res, next) => {
    const _id = req.params._id;

    Order.remove({ _id })
        .exec()
        .then(result => res.status(200).json({ _id }))
        .catch(error => res.status(500).json({ error }));
});

router.get(`/:_id`, (req, res, next) => {
    const _id = req.params._id;

    Order.findById(_id)
        .exec()
        .then(order => res.status(200).json(order))
        .catch(error => res.status(500).json({ error }));
});

export default router;
