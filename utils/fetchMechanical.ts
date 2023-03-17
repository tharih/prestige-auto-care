import { MechanicalType } from "./type";

export const fetchMechanical = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMechanical`);

  const data = await res.json();
  const mechanical: MechanicalType[] = data.mechanical;
  return mechanical;
};
