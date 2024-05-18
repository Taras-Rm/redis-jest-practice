// example: METHOD:path
// GET:/users
const generateRequestCacheKey = (method, path) => {
  return `${method}:${path}`;
};

export { generateRequestCacheKey };
