import React from "react";
import SuccessAlert from "../../components/success/SuccessAlert";
import { BodyStyle, ContentsWrapper } from "../../style/style";

const Index = () => {
  return (
    <BodyStyle>
      <ContentsWrapper>
        <SuccessAlert />
      </ContentsWrapper>
    </BodyStyle>
  );
};

export default Index;
