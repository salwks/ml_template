import express from "express";
import routes from "../routes";
import {
    dashboard
} from "../controllers/mlController";

const mlRouter = express.Router();

mlRouter.get(routes.dashboard, dashboard);

export default mlRouter;