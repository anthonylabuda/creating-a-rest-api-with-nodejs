import express from "express";
import multer from "multer";
import authenticate from "../middleware/authentication.js";
import productsController from "../controllers/products.js";

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

router.get(`/`, productsController.GET_PRODUCTS);
router.post(`/`, authenticate, upload.single(`image`), productsController.POST_PRODUCT);

router.delete(`/:_id`, authenticate, productsController.DELETE_PRODUCT_BY_ID);
router.get(`/:_id`, productsController.GET_PRODUCT_BY_ID);
router.patch(`/:_id`, authenticate, productsController.PATCH_PRODUCT_BY_ID);

export default router;
