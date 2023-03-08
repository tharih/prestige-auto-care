import { GalleryType } from "./type";

export const fetchGallery = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getGallery`);

  const data = await res.json();
  const gallery: GalleryType[] = data.gallery;
  return gallery;
};
