import { Router } from "express";

const router = Router();

// -------------------------
// /products
// -------------------------
router.get("/", (req, res, next) => {
    const products = [];

    res.status(200).json({
        "message": "Success!",
        "data": {
            products
        }
    });
});

router.post("/", (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };

    res.status(201).json({
        "message": "Success!",
        "data": {
            product
        }
    });
});

// -------------------------
// /products/:id
// -------------------------
router.delete("/:id", (req, res, next) => {
    const product = {
        id: req.params.id
    };

    res.status(200).json({
        "message": "Success!",
        "data": {
            product
        }
    });
});

router.get("/:id", (req, res, next) => {
    const product = {
        id: req.params.id
    };

    res.status(200).json({
        "message": "Success!",
        "data": {
            product
        }
    });
});

router.patch("/:id", (req, res, next) => {
    const product = {
        id: req.params.id
    };

    res.status(200).json({
        "message": "Success!",
        "data": {
            product
        }
    });
});

export default router;
