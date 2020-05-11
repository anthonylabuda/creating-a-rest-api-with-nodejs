import express from "express";
import authenticate from "../middleware/authenticator.js";
import UsersController from "../controllers/users.js";

const router = express.Router();

router.delete(`/:_id`, authenticate, UsersController.DELETE_USER_BY_ID);

router.post(`/login`, UsersController.POST_USER_LOGIN);

router.post(`/signup`, UsersController.POST_USER_SIGNUP);

export default router;
