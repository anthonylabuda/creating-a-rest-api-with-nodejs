import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.js";

const router = express.Router();

// -------------------------
// /products
// -------------------------
router.get(`/`, (req, res, next) => {
    Product.find()
        .exec()
        .then(products => res.status(200).json({ count: products.length, products }))
        .catch(error => res.status(500).json({ error }));
});

router.post(`/`, (req, res, next) => {
    const product = new Product({
        ...req.body,
        _id: new mongoose.Types.ObjectId()
    });

    product.save()
        .then(product => res.status(201).json({ product }))
        .catch(error => res.status(500).json({ error }));
});

// -------------------------
// /products/:id
// -------------------------
router.delete(`/:_id`, (req, res, next) => {
    const _id = req.params._id;

    Product.remove({ _id })
        .exec()
        .then(() => res.status(200).json({ product: { _id } }))
        .catch(error => res.status(500).json({ error }));
});

router.get(`/:_id`, (req, res, next) => {
    const _id = req.params._id;

    Product.findById(_id)
        .exec()
        .then(product => res.status(200).json({ product }))
        .catch(error => res.status(500).json({ error }));
});

router.patch(`/:_id`, (req, res, next) => {
    const _id = req.params._id;
    const product = req.body;
    const options = { new: true }

    delete product._id;

    Product.findByIdAndUpdate(_id, product, options)
        .then(product => res.status(200).json({ product }))
        .catch(error => res.status(500).json({ error }));
});

export default router;
