import express, { Application } from "express";
import { env } from "./config/env";
import { logger } from "./config/logger";
import { logMiddleware } from "./middleware/log-middlewar";
import { routeMiddleware } from "./middleware/route-middleware";
const app: Application = express();

app.use(express.json());

app.use(logMiddleware);
app.use(routeMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(env.PORT, () => {
  logger.info(`Server is running in ${env.NODE_ENV} mode on port ${env.PORT}`);
});
