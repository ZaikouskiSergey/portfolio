import React from 'react';
import styled from "styled-components";
import Logo from "components/logo/Logo";
import Menu from "components/menu/Menu";
import IconContact from "layout/header/IconContact";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <IconContact/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  background-color: #86ea9e;
  display: flex;
  justify-content: space-between;  
`
export default Header;
