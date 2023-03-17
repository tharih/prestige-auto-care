import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { GalleryType } from "../../utils/type";

type Data = {
  gallery: GalleryType[];
};

const query = groq`
*[_type == "gallery"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const gallery: GalleryType[] = await client.fetch(query);
  res.status(200).json({ gallery });
}
