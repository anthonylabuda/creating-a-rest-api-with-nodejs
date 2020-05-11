import { Router } from "express";

const router = Router();

// -------------------------
// /orders
// -------------------------
router.get("/", (req, res, next) => {
    const orders = [];

    res.status(200).json({
        "message": "Success!",
        "data": {
            orders
        }
    });
});

router.post("/", (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };

    res.status(201).json({
        "message": "Success!",
        "data": {
            order
        }
    });
});

// -------------------------
// /orders/:id
// -------------------------
router.delete("/:id", (req, res, next) => {
    const order = {
        id: req.params.id
    };

    res.status(200).json({
        "message": "Success!",
        "data": {
            order
        }
    });
});

router.get("/:id", (req, res, next) => {
    const order = {
        id: req.params.id
    };

    res.status(200).json({
        "message": "Success!",
        "data": {
            order
        }
    });
});

export default router;
