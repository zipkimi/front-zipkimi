import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderLayout from "../../components/Layout/Header.layout";
import ZButton from "../../components/ZButton/ZButton";
import { BodyStyle } from "../../style/style";
import { ContentWrapper } from "../../components/Layout/Form.layout";
import FindSuccessContents from "../../components/FindSuccessContents/FindSuccessContents";
import { ROUTES } from "../../const/ROUTES";

const Index = () => {
  const navigate = useNavigate();

  return (
    <BodyStyle>
      <div>
        <HeaderLayout title="찾기" btn="back" />
        <FindSuccessContents />
      </div>
      <ContentWrapper>
        <ZButton
          outline
          onClick={() =>
            navigate(ROUTES.FIND, { state: { name: "비밀번호 찾기" } })
          }
        >
          비밀번호 찾기
        </ZButton>
        <ZButton
          style={{ marginTop: "-10px" }}
          onClick={() => navigate(ROUTES.LOGIN)}
        >
          로그인
        </ZButton>
      </ContentWrapper>
    </BodyStyle>
  );
};

export default Index;
