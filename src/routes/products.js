import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import Product from "../models/product.js";

const router = express.Router();

const fileFilter = (req, file, callback) => {
    const mimetypes = [`image/jpeg`, `image/png`];

    if (mimetypes.includes(file.mimetype)) return callback(null, true);

    callback(null, false);
}
const limits = {
    fileSize: 1024 * 1024 * 5
};
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, `./uploads/`);
    },
    filename: (req, file, callback) => {
        callback(null, `${new Date().toISOString()}_${file.originalname}`);
    }
});
const upload = multer({ fileFilter, limits, storage });

// -------------------------
// /products
// -------------------------
router.get(`/`, (req, res, next) => {
    Product.find()
        .exec()
        .then(products => res.status(200).json({ count: products.length, products }))
        .catch(error => res.status(500).json({ error }));
});

router.post(`/`, upload.single(`image`), (req, res, next) => {
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
});

// -------------------------
// /products/:id
// -------------------------
router.delete(`/:_id`, (req, res, next) => {
    const _id = req.params._id;

    Product.findByIdAndDelete(_id)
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

    delete product._id;

    Product.findByIdAndUpdate(_id, product, { new: true })
        .then(product => res.status(200).json({ product }))
        .catch(error => res.status(500).json({ error }));
});

export default router;
