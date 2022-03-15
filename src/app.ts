import express from "express";
import { loggerMiddleware } from "./utils/logger";
import apiRoutesV1 from "../src/routes/v1";
import constants from "./utils/constants";

const { apiV1 } = constants;

const app = express();

app.use(loggerMiddleware);
app.use(apiV1, apiRoutesV1);

export default app;
