import express from "express";
import OrdersController from "../controllers/orders.js";
import { authenticate } from "../utils/authentication.js";

const router = express.Router();

router.get(`/`, authenticate, OrdersController.GET_ORDERS);
router.post(`/`, authenticate, OrdersController.POST_ORDER);

router.delete(`/:_id`, authenticate, OrdersController.DELETE_ORDER_BY_ID);
router.get(`/:_id`, authenticate, OrdersController.GET_ORDER_BY_ID);

export default router;
