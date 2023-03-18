import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { ProductType } from "../../utils/type";

type Data = {
  product: ProductType[];
};

const query = groq`
*[_type == "product"][0...5] | order(_createdAt asc){
  ..., 
  category->{title}
}`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const product: ProductType[] = await client.fetch(query);
  res.status(200).json({ product });
}
