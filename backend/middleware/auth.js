const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    console.log("Cookies:", req.cookies); // Debugging
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("JWT Error:", err);
        return res.status(401).json({ message: "Invalid Token" });
      }
      console.log("Decoded JWT:", decoded);
      
      // Ensure `decoded.id` exists and set `req.userId`
      req.userId = decoded.id; // 🔥 FIXED HERE!
      req.user = decoded; // (Optional, if needed)

      next();
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = authToken;
