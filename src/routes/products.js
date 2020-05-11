import express from "express";
import ProductsController from "../controllers/products.js";
import fileManager from "../utils/fileManager.js";
import { authenticate } from "../utils/authentication.js";

const router = express.Router();

router.route(`/`)
    .get(ProductsController.GET_PRODUCTS)
    .post(authenticate, fileManager.single(`image`), ProductsController.POST_PRODUCT);

router.route(`/:_id`)
    .delete(authenticate, ProductsController.DELETE_PRODUCT_BY_ID)
    .get(ProductsController.GET_PRODUCT_BY_ID)
    .patch(authenticate, ProductsController.PATCH_PRODUCT_BY_ID);

export default router;
