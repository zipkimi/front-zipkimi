import React from "react";
import SignUp from "../../components/signUp/SignUp";
import SignUpLayout from "../../components/Layout/SignUp.layout";
import Header from "../../components/Layout/Header";

const Index = () => {
  return (
    <SignUpLayout header={<Header firstWord="회원" secondWord="가입" />}>
      <SignUp />
    </SignUpLayout>
  );
};

export default Index;
