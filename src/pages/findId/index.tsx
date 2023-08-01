import React from "react";
import FindId from "../../components/findId/FindId";
import Header from "../../components/Layout/Header";
import SignUpLayout from "../../components/Layout/SignUp.layout";

const Index = () => {
  return (
    <SignUpLayout header={<Header firstWord={"아이디"} secondWord={" 찾기"} />}>
      <FindId />
    </SignUpLayout>
  );
};

export default Index;
