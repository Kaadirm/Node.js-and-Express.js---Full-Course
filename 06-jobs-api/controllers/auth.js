// auth.js

// Register function
const register = async (req, res) => {
  res.send("register user");
};

// Login function
const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
