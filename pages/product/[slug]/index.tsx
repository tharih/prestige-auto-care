import { NextRouter, useRouter } from "next/router";

type Props = {
  router: NextRouter;
  slug: string;
};
const Product = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default Product;
