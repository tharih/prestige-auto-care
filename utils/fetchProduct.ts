import { ProductType } from "./type";

export const fetchProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
  );

  const data = await res.json();
  const product: ProductType[] = data.product;
  return product;
};
