import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";

type Data = {
  service: any[];
};

const query = groq`
*[_type == "service"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const service: any[] = await client.fetch(query);
  res.status(200).json({ service });
}
