import React from "react";
import FindPw from "../../components/findPw/FindPw";
import Header from "../../components/Layout/Header";
import SignUpLayout from "../../components/Layout/SignUp.layout";

const Index = () => {
  return (
    <SignUpLayout header={<Header firstWord="비밀번호" secondWord=" 찾기" />}>
      <FindPw />
    </SignUpLayout>
  );
};

export default Index;
