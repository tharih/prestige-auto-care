import React from "react";
import { client } from "../../../client";

type IProps = {
  //   params: {
  //     slug: string;
  //   };
};
const SingleProduct = () => {
  return <div>SingleProduct</div>;
};

export async function getStaticPaths() {
  const query = `*[_type == "product"]{
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
  const product = await client.fetch(query);

  return {
    props: { product },
    revalidate: 10,
  };
}
export default SingleProduct;
