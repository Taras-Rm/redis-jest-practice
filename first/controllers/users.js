import axios from "axios";
import path from "path";
import { generateRequestCacheKey } from "../redis/helper.js";

const getUsers = async (req, res) => {
  try {
    const response = await axios.get(
      path.join(process.env.EXTERNAL_API_URL, "users")
    );

    const users = response.data;

    const key = generateRequestCacheKey(req.method, req.originalUrl);

    await redisClient.set(key, JSON.stringify(users));

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export { getUsers };
