import { AboutType } from "./type";

export const fetchOrder = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getOrder`);

  const data = await res.json();
  const order: any[] = data.order;
  return order;
};
