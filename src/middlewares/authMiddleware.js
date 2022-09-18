import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")?.at(1);
  const decodedObj = jwt.decode(token);

  if (!decodedObj) {
    res.statusCode = 403;
    next();
    return;
  }

  next();
};
