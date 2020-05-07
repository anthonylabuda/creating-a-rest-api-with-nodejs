import express from "express";

const router = express.Router();

// -------------------------
// /orders
// -------------------------
router.get("/", (req, res, next) => {
    const orders = [];

    res.status(200).json({
        "message": "Handling GET requests to /orders",
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
        "message": "Handling POST requests to /orders",
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
        "message": "Handling DELETE requests to /orders/:id",
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
        "message": "Handling GET requests to /orders/:id",
        "data": {
            order
        }
    });
});

export default router;
