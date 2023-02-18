import api from "./axios";
import apiRequest from "./axios";

// export const getTo = api.get("/board/fraud-prevention");

export const getTo = apiRequest("get", "/board/fraud-prevention");
