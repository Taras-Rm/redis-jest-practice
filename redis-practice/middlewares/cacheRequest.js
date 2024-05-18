import { generateRequestCacheKey } from "../redis/helper.js";
import redisClient from "../redis/connection.js";

const cacheRequestMiddleware = async (req, res, next) => {
  try {
    const key = generateRequestCacheKey(req.method, req.originalUrl);

    const result = await redisClient.get(key);
    if (!result) {
      return next();
    }

    console.log("take result from redis");
    return res.status(200).json(JSON.parse(result));
  } catch (error) {
    console.log("middleware error: ", error);
  }
};

export default cacheRequestMiddleware;
