import type { NextApiRequest, NextApiResponse } from "next";
import { UserType } from "../../../utils/type";
import bcrypt from "bcryptjs";
import axios from "axios";
import { signToken } from "../../../utils/signToken";

type Data = {
  message: string;
};
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const createMutations = [
      {
        create: {
          _type: "user",
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password),
          isAdmin: false,
        },
      },
    ];
    const apiEndPoint = `https://${projectId}.api.sanity.io/v2022-11-15/data/mutate/${dataset}?returnIds=true`;
    const { data } = await axios.post(
      apiEndPoint,
      { mutations: createMutations },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );
    const userID = data.results[0].id;
    const user = {
      _id: userID,
      name: req.body.name,
      email: req.body.email,
      isAdmin: false,
    };

    const token = signToken(user);

    // @ts-ignore
    res.send({ ...user, token });
  }
}
