import React from "react";
import Header from "../../components/Layout/Header";
import SignUpLayout from "../../components/Layout/SignUp.layout";
import Verified from "../../components/verified/Verified";

const Index = () => {
  return (
    <SignUpLayout
      header={<Header firstWord={"본인인증"} secondWord={"을 완료했습니다"} />}
    >
      <Verified />
    </SignUpLayout>
  );
};

export default Index;
