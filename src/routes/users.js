import express from "express";
import UsersController from "../controllers/users.js";
import { authenticate } from "../utils/authentication.js";

const router = express.Router();

router.delete(`/:_id`, authenticate, UsersController.DELETE_USER_BY_ID);

router.post(`/login`, UsersController.POST_USER_LOGIN);

router.post(`/signup`, UsersController.POST_USER_SIGNUP);

export default router;
