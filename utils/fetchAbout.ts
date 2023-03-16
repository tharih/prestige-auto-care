import { AboutType } from "./type";


export const fetchAbout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);

  const data = await res.json();
  const about: AboutType[] = data.about;
  return about;
};
