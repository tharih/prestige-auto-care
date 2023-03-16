export const fetchService = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getService`);

  const data = await res.json();
  const service: any[] = data.service;
  return service;
};
