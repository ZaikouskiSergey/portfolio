import React from 'react';
import styled from "styled-components";

import {Logo} from "components/logo/Logo";
import {Menu} from "components/menu/Menu";
import {IconContact} from "layout/header/IconContact";

export const Header = () => {
    const menuItems = ["Home", "Skills", "Works", "Testimony", "Contact"]
    return (
        <StyledHeader>
            <Logo/>
            <Menu items={menuItems}/>
            <IconContact/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  background-color: #86ea9e;
  display: flex;
  justify-content: space-between;
`

