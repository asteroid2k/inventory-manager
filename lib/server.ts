import "dotenv/config";
import config from "config";
import app from "../src/app";

const port = config.get<number>("port");

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
