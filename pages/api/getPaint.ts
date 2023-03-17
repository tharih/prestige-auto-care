import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { PaintType } from "../../utils/type";

type Data = {
  paint: PaintType[];
};

const query = groq`
*[_type == "paint"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const paint: PaintType[] = await client.fetch(query);
  res.status(200).json({ paint });
}
