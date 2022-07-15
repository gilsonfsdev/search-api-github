import React from "react";
import Header from "../header";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  );
};

export default Layout;