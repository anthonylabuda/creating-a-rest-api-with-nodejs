import express from "express";
import multer from "multer";
import ProductsController from "../controllers/products.js";
import { authenticate } from "../utils/authentication.js";

const router = express.Router();

const fileFilter = (req, file, callback) => {
    const mimetypes = [`image/jpeg`, `image/png`];

    if (mimetypes.includes(file.mimetype)) return callback(null, true);

    callback(null, false);
}
const limits = {
    fileSize: 1024 * 1024 * 5
};
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, `./uploads/`);
    },
    filename: (req, file, callback) => {
        callback(null, `${new Date().toISOString()}_${file.originalname}`);
    }
});
const upload = multer({ fileFilter, limits, storage });

router.get(`/`, ProductsController.GET_PRODUCTS);
router.post(`/`, authenticate, upload.single(`image`), ProductsController.POST_PRODUCT);

router.delete(`/:_id`, authenticate, ProductsController.DELETE_PRODUCT_BY_ID);
router.get(`/:_id`, ProductsController.GET_PRODUCT_BY_ID);
router.patch(`/:_id`, authenticate, ProductsController.PATCH_PRODUCT_BY_ID);

export default router;
