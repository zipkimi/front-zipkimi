import React from "react";
import * as S from "./Category.style";
import CateItem from "./CateItem";
import { CategoryProps } from "../../../types/category";

const Category = (props: CategoryProps) => {
  const {cateTitle, catePath} = props;

  return (
    <S.Wrapper>
      <S.CateTitle><a href={catePath}>{cateTitle}</a></S.CateTitle>
      <S.Ul>
        <CateItem {...props}/>
        <CateItem {...props}/>
        <CateItem {...props}/>
        <CateItem {...props}/>
        <CateItem {...props}/>
        <CateItem {...props}/>
      </S.Ul>
    </S.Wrapper>
  );
};

export default Category;