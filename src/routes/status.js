import express from "express";
import statusController from "../controllers/status.js";

const router = express.Router();

router.get(`/`, statusController.GET_STATUS);

export default router;
