import express from "express";

const router = express.Router();

// -------------------------
// /products
// -------------------------
router.get("/", (req, res, next) => {
    res.status(200).json({
        "message": "Handling GET requests to /products",
        "data": {
            "products": []
        }
    });
});

router.post("/", (req, res, next) => {
    res.status(201).json({
        "message": "Handling POST requests to /products",
        "data": {
            "product": {}
        }
    });
});

// -------------------------
// /products/:id
// -------------------------
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        "message": "Handling DELETE requests to /products/:id",
        "data": {
            "product": {
                "id": id
            }
        }
    });
});

router.get("/:id", (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        "message": "Handling GET requests to /products/:id",
        "data": {
            "product": {
                "id": id
            }
        }
    });
});

router.patch("/:id", (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        "message": "Handling PATCH requests to /products/:id",
        "data": {
            "product": {
                "id": id
            }
        }
    });
});

export default router;
