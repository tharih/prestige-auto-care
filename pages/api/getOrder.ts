import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { AboutType } from "../../utils/type";

type Data = {
  order: any[];
};

const query = groq`
*[_type == "order"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const order: any[] = await client.fetch(query);
  res.status(200).json({ order });
}
