import React from "react";
import { client } from "../../../client";

type IProps = {
  //   params: {
  //     slug: string;
  //   };
};
const SingleService = () => {
  return <div>SingleService</div>;
};

export async function getStaticPaths() {
  const query = `*[_type == "service"]{
        slug{
            current
        }
      }`;
  const allSlugs = await client.fetch(query);
  const paths = allSlugs.map((slugName: any) => ({
    params: {
      slug: slugName.slug.current,
    },
  }));

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;

  const query = `*[slug.current == "${slug}"]`;
  const service = await client.fetch(query);

  return {
    props: { service },
    revalidate: 10,
  };
}
export default SingleService;
