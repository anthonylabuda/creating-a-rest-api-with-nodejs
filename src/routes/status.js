import express from "express";
import StatusController from "../controllers/status.js";

const router = express.Router();

router.get(`/`, StatusController.GET_STATUS);

export default router;
