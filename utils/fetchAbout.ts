import { AboutType } from "./type";

export const fetchAbout = async () => {
  const res = await fetch(`https://prestige-auto-care.vercel.app/api/getAbout`);

  const data = await res.json();
  const about: AboutType[] = data.about;
  return about;
};
