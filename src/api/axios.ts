import axios from "axios";

type AxiosMethod = "get" | "post" | "put" | "patch" | "delete";

const api = axios.create({
  baseURL: "www.safein.care:8080",
});

const apiRequest = async (
  method: AxiosMethod,
  url: string,
  data?: object,
  auth?: string,
) => {
  let options = {
    method,
    url,
    headers: {},
  };

  if (method !== "get") {
    Object.assign(options, { data });
  }

  if (auth) {
    Object.assign(options.headers, { Authorization: auth });
  }

  return await api(options);
};

export default apiRequest;
