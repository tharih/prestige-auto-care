import { CategoryType, ProductType } from "./type";

export const fetchCategory = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategory`
  );

  const data = await res.json();
  const category: CategoryType[] = data.category;
  return category;
};
