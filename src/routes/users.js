import express from "express";
import authenticate from "../middleware/authentication.js";
import usersController from "../controllers/users.js";

const router = express.Router();

router.delete(`/:_id`, authenticate, usersController.DELETE_USER_BY_ID);

router.post(`/login`, usersController.POST_USER_LOGIN);

router.post(`/signup`, usersController.POST_USER_SIGNUP);

export default router;
