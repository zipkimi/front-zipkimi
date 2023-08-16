import React from "react";
import styled from "styled-components";
import { BodyStyle } from "../../style/style";

type Props = {
  children: React.ReactNode;
  header?: React.ReactNode;
};

const SignUpLayout = ({ children, header }: Props) => {
  return (
    <BodyStyle>
      {header && header}
      <Wrapper>{children}</Wrapper>
    </BodyStyle>
  );
};

export default SignUpLayout;

const Wrapper = styled.div`
  flex: 1;
  padding: 1.5rem;
`;
