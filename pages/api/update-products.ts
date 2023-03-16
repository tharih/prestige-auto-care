import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

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
  console.log("body data", req.body);

  const mutations = {
    mutations: [
      {
        patch: {
          id: req.body._id,
          set: {
            quantity: req.body.quantity,
          },
        },
      },
    ],
  };

  const apiEndPoint = `https://${projectId}.api.sanity.io/v2022-11-15/data/mutate/${dataset}`;
  const result = await fetch(apiEndPoint, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${tokenWithWriteAccess}`,
    },
    body: JSON.stringify(mutations),
    method: "POST",
  });

  const json = await result.json();

  res.status(200).json({ message: "Updated Successfully" });
}
