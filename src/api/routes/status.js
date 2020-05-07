import express from "express";

const router = express.Router();

// -------------------------
// /status
// -------------------------
router.get("/", (req, res, next) => {
    res.status(200).json({
        "message": "API Online!"
    });
});

export default router;
