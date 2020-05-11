import express from "express";
import UsersController from "../controllers/users.js";
import { authenticate } from "../utils/authentication.js";

const router = express.Router();

router.route(`/:_id`)
    .delete(authenticate, UsersController.DELETE_USER_BY_ID);

router.route(`/login`)
    .post(UsersController.POST_USER_LOGIN);

router.route(`/signup`)
    .post(UsersController.POST_USER_SIGNUP);

export default router;
