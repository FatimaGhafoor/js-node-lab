require("dotenv").config();
const jwt = require("jsonwebtoken");

const mockUser = {
  _id: "66f4b81234bc9901",
  email: "developer_lab@gmail.com",
  role: "admin",
};

function createAccessToken(user) {
  const payload = {
    userId: user._id,
    role: user.role,
  };

  const secretKey = process.env.JWT_SECRET;

  const options = {
    expiresIn: process.env.JWT_EXPIRES_IN,
  };

  return jwt.sign(payload, secretKey, options);
}

const newSessionToken = createAccessToken(mockUser);

console.log("=================================================");
console.log("✅ SYSTEM CONFIGURATION INJECTED SUCCESSFUL");
console.log("=================================================");
console.log("Generated JWT Token String:\n\n", newSessionToken);
console.log("=================================================");

module.exports = { createAccessToken };
