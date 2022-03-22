import "module-alias/register";
import express from "express";
require("express-async-errors");
import { loggerMiddleware } from "./utils/logger";
import apiRoutesV1 from "../src/routes/v1";
import constants from "./utils/constants";
import apiErrorHandler from "./utils/errors/handler";

const { apiV1 } = constants;
const app = express();

app.use(loggerMiddleware);
app.use(apiV1, apiRoutesV1);
app.use(apiErrorHandler);

export default app;
