import React from "react";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/success/SuccessAlert";
import { BodyStyle } from "../../style/style";
import ZButton from "../../components/ZButton/ZButton";
import HeaderLayout from "../../components/Layout/Header.layout";

const Index = () => {
  const navigate = useNavigate();

  return (
    <BodyStyle style={{ height: "100vh" }}>
      <div>
        <HeaderLayout title="회원가입" btn="back" />
        <SuccessAlert />
      </div>
      <ZButton type="submit" isRound="none" onClick={() => navigate("/login")}>
        홈 화면으로 이동하기
      </ZButton>
    </BodyStyle>
  );
};

export default Index;
