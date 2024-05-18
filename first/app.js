import express from "express";
import cacheRequestMiddleware from "./middlewares/cacheRequest.js";
import { getUsers } from "./controllers/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// cache middleware
app.use(cacheRequestMiddleware);

app.get("/users", getUsers);

export default app;
