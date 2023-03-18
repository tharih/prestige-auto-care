import { BlogType } from "./type";

export const fetchBlog = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBlog`);

  const data = await res.json();
  const blog: BlogType[] = data.blog;
  return blog;
};

export const fetchLatestBlog = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getLatestBlog`);

  const data = await res.json();
  const blog: BlogType[] = data.blog;
  return blog;
};
