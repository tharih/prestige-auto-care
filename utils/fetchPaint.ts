import { PaintType } from "./type";

export const fetchPaint = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPaint`);

  const data = await res.json();
  const paint: PaintType[] = data.paint;
  return paint;
};
