import express, { Application } from "express";
import { IndexRoute } from "./app/module/routes";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", IndexRoute);

export default app;
