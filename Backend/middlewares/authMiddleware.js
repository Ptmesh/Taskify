const authMiddleware = (req, res, next) => {
  if (req.session.userID) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

export default authMiddleware;
