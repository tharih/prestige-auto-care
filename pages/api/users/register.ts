import type { NextApiRequest, NextApiResponse } from "next";
import { UserType } from "../../../utils/type";
import bcrypt from "bcryptjs";

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
  const data: UserType = req.body;

  const createMutations = [
    {
      create: {
        _type: "user",
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashAsync(req.body.password),
        isAdmin: false,
      },
    },
  ];
  const apiEndPoint = `https://${projectId}.api.sanity.io/v2022-11-15/data/mutate/${dataset}`;
  const result = await fetch(apiEndPoint, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenWithWriteAccess}`,
    },
    body: JSON.stringify(createMutations),
    method: "POST",
  });
  const json = await result.json();
  res.status(200).json({ message: "Added" });
}
