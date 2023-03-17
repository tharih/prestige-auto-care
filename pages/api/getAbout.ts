import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { AboutType } from "../../utils/type";

type Data = {
  about: AboutType[];
};

const query = groq`
*[_type == "about"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const about: AboutType[] = await client.fetch(query);
  res.status(200).json({ about });
}
