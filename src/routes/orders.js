import express from "express";
import OrdersController from "../controllers/orders.js";
import { authenticate } from "../utils/authentication.js";

const router = express.Router();

router.route(`/`)
    .get(authenticate, OrdersController.GET_ORDERS)
    .post(authenticate, OrdersController.POST_ORDER);

router.route(`/:_id`)
    .delete(authenticate, OrdersController.DELETE_ORDER_BY_ID)
    .get(authenticate, OrdersController.GET_ORDER_BY_ID);

export default router;
