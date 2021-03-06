import mongoose from "mongoose";
import Orders from "../models/orders.js";

const DELETE_ORDER_BY_ID = (req, res, next) => {
    const _id = req.params._id;
    const order = { _id };

    Orders.findByIdAndDelete(_id)
        .exec()
        .then(() => res.status(200).json({ order }))
        .catch(error => res.status(500).json({ error }));
};

const GET_ORDER_BY_ID = (req, res, next) => {
    const _id = req.params._id;

    Orders.findById(_id)
        .populate(`product`)
        .exec()
        .then(order => res.status(200).json({ order }))
        .catch(error => res.status(500).json({ error }));
};

const GET_ORDERS = (req, res, next) => {
    Orders.find()
        .populate(`product`)
        .exec()
        .then(orders => res.status(200).json({ count: orders.length, orders }))
        .catch(error => res.status(500).json({ error }));
};

const POST_ORDER = (req, res, next) => {
    const { product, quantity } = req.body;

    const order = new Orders({
        _id: new mongoose.Types.ObjectId(),
        product,
        quantity
    });

    order.save()
        .then(order => res.status(201).json({ order }))
        .catch(error => res.status(500).json({ error }));
};

export default {
    DELETE_ORDER_BY_ID,
    GET_ORDER_BY_ID,
    GET_ORDERS,
    POST_ORDER
};
