import express from "express";
import routes from "../routes";
import {
    signin,
    signup
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.signin, signin);
userRouter.get(routes.signup, signup);

export default userRouter;