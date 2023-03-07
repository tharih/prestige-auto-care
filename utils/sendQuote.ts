import { toast } from "react-hot-toast";

export const sendQuote = async (data: any) =>
  fetch("/api/send-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res;
  });
