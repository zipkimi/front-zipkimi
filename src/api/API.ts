import apiRequest from "./axios";

// export const getTo = api.get("/board/fraud-prevention");

export const getFraud = async () => {
  await apiRequest("get", "/board/fraud-prevention");
};

export const postFraud = (data: any) => {
  apiRequest("post", "/board/fraud-prevention", data);
};
