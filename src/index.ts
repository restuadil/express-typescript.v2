import express, { Application } from "express";
import { env } from "./config/env";
import { logger } from "./config/logger";
import { logMiddleware } from "./middleware/log.middlewar";
import { routeMiddleware } from "./middleware/route.middleware";
import { errorMiddleware } from "./middleware/error.middleware";
import { CategoryRouter } from "./api/category/category.route";
import { uuidMiddleware } from "./middleware/uuidMiddleware";
const app: Application = express();

app.use(express.json());

app.use(logMiddleware);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use(CategoryRouter);
app.use(errorMiddleware);
app.use(routeMiddleware);

// server.listen
app.listen(env.PORT, () => {
  logger.info(`Server is running in ${env.NODE_ENV} mode on port ${env.PORT}`);
});
