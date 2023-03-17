import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { CategoryType } from "../../utils/type";

type Data = {
  category: CategoryType[];
};

const query = groq`
*[_type == "category"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const category: CategoryType[] = await client.fetch(query);
  res.status(200).json({ category });
}
