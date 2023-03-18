import { ProductType } from "./type";

export const fetchProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
  );

  const data = await res.json();
  const product: ProductType[] = data.product;
  return product;
};


export const fetchLatestProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getLatestProduct`
  );

  const data = await res.json();
  const product: ProductType[] = data.product;
  return product;
};


