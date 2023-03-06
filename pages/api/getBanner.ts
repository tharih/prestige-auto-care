import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { BannerType } from "../../utils/type";

type Data = {
  banner: BannerType[];
};

const query = groq`
*[_type == "banner"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const banner: BannerType[] = await client.fetch(query);
  res.status(200).json({ banner });
}
