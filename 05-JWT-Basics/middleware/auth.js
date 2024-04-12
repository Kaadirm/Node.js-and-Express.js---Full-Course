const jwt = require("jsonwebtoken");
const {UnauthenticatedError} = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");

  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;

// const authMiddleware = (req, res, next) => {
//     // Add your authentication logic here
//     // For example, you can check if the request contains a valid JWT token
//     const token = req.headers.authorization;
//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
//     // Verify the token and extract the user information
//     // You can use a JWT library like jsonwebtoken to verify the token
//     try {
//         const decoded = jwt.verify(token, 'your-secret-key');
//         req.user = decoded.user;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Invalid token' });
//     }
// };
// module.exports = authMiddleware;
