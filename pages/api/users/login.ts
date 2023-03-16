// import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../client";
// import { signToken } from "../../../utils/signToken";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method === "POST") {
  //   const user = await client.fetch(
  //     `*[_type == "user" && email == $email][0]`,
  //     {
  //       email: req.body.email,
  //     }
  //   );

  //   if (user && bcrypt.compareSync(req.body.password, user.password)) {
  //     const token = signToken({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //       role: user.role,
  //     });

  //     res.send({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //       role: user.role,
  //       token,
  //     });
  //   } else {
  //     res.status(401).send({ message: "Invalid email or password" });
  //   }
  // }
}
