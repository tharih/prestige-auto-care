import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { MechanicalType } from "../../utils/type";

type Data = {
  mechanical: MechanicalType[];
};

const query = groq`
*[_type == "mechanical"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mechanical: MechanicalType[] = await client.fetch(query);
  res.status(200).json({ mechanical });
}
