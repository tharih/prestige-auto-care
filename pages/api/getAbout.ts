import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";

type Data = {
  name: string;
};

const query = groq`
*[_type == "about"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const aboutData: any = await client.fetch(query);
  res.status(200).json(aboutData);
}
