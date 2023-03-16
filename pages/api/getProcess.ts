import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../client";
import { WorkProcessType } from "../../utils/type";

type Data = {
    workProcess: WorkProcessType[];
};

const query = groq`
*[_type == "workProcess"]`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const workProcess: WorkProcessType[] = await client.fetch(query);
  res.status(200).json({ workProcess });
}
