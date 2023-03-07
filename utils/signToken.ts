import jwt from "jsonwebtoken";

const signToken = (user: any) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { signToken };
