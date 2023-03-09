import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { ProductType } from "../../utils/type";

type Data = {
  product: ProductType[];
  page_count: any;
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const product: ProductType[] = await client.fetch(
  //   `*[_type == "product"][$start...$page]{
  //   ...,
  //   category->{title}
  // }`,
  //   {
  //     start: Number(req.query.start),
  //     page: Number(req.query.page) || 1,
  //   }
  // );
  // const countProduct: ProductType[] = await client.fetch(
  //   `*[_type == "product"]`
  // );
  // let count = countProduct.length;
  // let page_count = count / 2;
  // res.status(200).json({ product, page_count, count });
}
