import "dotenv/config";
import config from "config";
import app from "../src/app";
import { logger } from "@utils/logger";

const port = config.get<number>("port");

app.listen(port, async () => {
  logger.info(`Server running on port ${port}`);
});
