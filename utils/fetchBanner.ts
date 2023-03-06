import { BannerType } from "./type";

export const fetchBanner = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBanner`);

  const data = await res.json();
  const banner: BannerType[] = data.banner;
  return banner;
};
