import express from "express";
import ProductsController from "../controllers/products.js";
import fileManager from "../utils/fileManager.js";
import { authenticate } from "../utils/authentication.js";

const router = express.Router();

router.get(`/`, ProductsController.GET_PRODUCTS);
router.post(`/`, authenticate, fileManager.single(`image`), ProductsController.POST_PRODUCT);

router.delete(`/:_id`, authenticate, ProductsController.DELETE_PRODUCT_BY_ID);
router.get(`/:_id`, ProductsController.GET_PRODUCT_BY_ID);
router.patch(`/:_id`, authenticate, ProductsController.PATCH_PRODUCT_BY_ID);

export default router;
