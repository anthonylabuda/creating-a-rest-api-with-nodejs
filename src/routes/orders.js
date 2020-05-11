import express from "express";
import authenticate from "../middleware/authentication.js";
import ordersController from "../controllers/orders.js";

const router = express.Router();

router.get(`/`, authenticate, ordersController.GET_ORDERS);
router.post(`/`, authenticate, ordersController.POST_ORDER);

router.delete(`/:_id`, authenticate, ordersController.DELETE_ORDER_BY_ID);
router.get(`/:_id`, authenticate, ordersController.GET_ORDER_BY_ID);

export default router;
