import api from "./axios";

/* ----------------------------------------------
>>> TABLE OF CONTENTS
-------------------------------------------------
  0. 회원가입/로그인
  1. 찾기
---------------------------------------------- */

// ----------------------------------------------
// 0. 회원가입/로그인
// ----------------------------------------------
// 0-1. 회원가입
export const signUp = async (data: unknown) => {
  await api.post("/api/v1/userMgmt/users", data);
};

// 0-1-1. SMS 인증
export const signUpAuthMessage = async (data: unknown) => {
  await api.post("/api/v1/userMgmt/users/sms", data);
};

// 0-1-2. SMS 인증 확인
export const getSignUpAuth = async (id: number) => {
  await api.get(`/api/v1/userMgmt/users/sms/${id}`);
};

// 0-2. 로그인
export const signIn = async (data: unknown) => {
  await api.post("/api/v1/users/auth/login", data);
};

// 0-3. 로그아웃
export const signOut = async (data: any) => {
  await api.delete("/api/v1/users/auth/logout", data);
};

// 0-4. 토큰 재발급
export const reissueToken = async (data: unknown) => {
  await api.post("/api/v1/users/auth/reissue", data);
};

// ----------------------------------------------
// 1. 찾기
// ----------------------------------------------
// 1-1. 아이디 찾기 SMS 인증
export const sendFindIdMessage = async (data: unknown) => {
  await api.post("/api/v1/users/find-id/sms", data);
};

// 1-1-1. 아이디 찾기 결과
export const getFindId = async () => {
  await api.get("/api/v1/users/find-id/sms");
};

// 1-2. 비밀번호 찾기 SMS 인증
export const sendFindPwMessage = async (data: unknown) => {
  await api.post("/api/v1/users/find-pw/sms", data);
};

// 1-2-1. 비밀번호 찾기 결과
export const getFindPw = async () => {
  await api.get("/api/v1/users/find-pw/sms");
};
