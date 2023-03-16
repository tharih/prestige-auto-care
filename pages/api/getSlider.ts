import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";

type Data = {
  slider: any[];
};

const query = groq`
*[_type == "slider"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const slider: any[] = await client.fetch(query);
  res.status(200).json({ slider });
}
