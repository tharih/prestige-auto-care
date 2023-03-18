import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { BlogType } from "../../utils/type";

type Data = {
  blog: BlogType[];
};

const query = groq`
*[_type == "blog"][0..1] | order(_createdAt asc)`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const blog: BlogType[] = await client.fetch(query);
  res.status(200).json({ blog });
}
