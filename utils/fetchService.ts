export const fetchService = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getService`
  ).then((res) => res.json());
  const service: any[] = result.service;
  return service;
};
