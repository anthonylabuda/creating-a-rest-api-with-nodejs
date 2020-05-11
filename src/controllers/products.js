import mongoose from "mongoose";
import Product from "../models/product.js";

const DELETE_PRODUCT_BY_ID = (req, res, next) => {
    const _id = req.params._id;
    const product = { _id };

    Product.findByIdAndDelete(_id)
        .exec()
        .then(() => res.status(200).json({ product }))
        .catch(error => res.status(500).json({ error }));
};

const GET_PRODUCT_BY_ID = (req, res, next) => {
    const _id = req.params._id;

    Product.findById(_id)
        .exec()
        .then(product => res.status(200).json({ product }))
        .catch(error => res.status(500).json({ error }));
};

const GET_PRODUCTS = (req, res, next) => {
    Product.find()
        .exec()
        .then(products => res.status(200).json({ count: products.length, products }))
        .catch(error => res.status(500).json({ error }));
};

const PATCH_PRODUCT_BY_ID = (req, res, next) => {
    const _id = req.params._id;
    const product = req.body;

    Product.findByIdAndUpdate(_id, product, { new: true })
        .then(product => res.status(200).json({ product }))
        .catch(error => res.status(500).json({ error }));
};

const POST_PRODUCT = (req, res, next) => {
    const { path } = req.file;
    const { name, price } = req.body;

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name,
        price,
        image: path,
    });

    product.save()
        .then(product => res.status(201).json({ product }))
        .catch(error => res.status(500).json({ error }));
};

export default {
    DELETE_PRODUCT_BY_ID,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS,
    PATCH_PRODUCT_BY_ID,
    POST_PRODUCT
};
