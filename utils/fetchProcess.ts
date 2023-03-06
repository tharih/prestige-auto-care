import { WorkProcessType } from "./type";


export const fetchProcess = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProcess`);

  const data = await res.json();
  const workProcess: WorkProcessType[] = data.workProcess;
  return workProcess;
};
