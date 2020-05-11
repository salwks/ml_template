import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./router/userRouter";
import mlRouter from "./router/mlRouter";
import routes from "./routes";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan("dev"));
app.use(helmet());

app.use(routes.signin, userRouter);
app.use(routes.signup, userRouter);
app.use(routes.dashboard, mlRouter);

export default app;