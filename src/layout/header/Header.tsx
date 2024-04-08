import React from 'react';
import styled from "styled-components";

import {Logo} from "components/logo/Logo";
import {IconContact} from "layout/header/IconContact";
import {Container} from "components/Container";
import {FlexWrapper} from "components/FlexWrapper";
import {HeaderMenu} from "layout/header/headerMenu/HeaderMenu";

export const Header = () => {
    const menuItems = ["Home", "Skills", "Works", "Testimony", "Contact"]
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu items={menuItems}/>
                    <IconContact/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  background-color: #1F1F20;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

`

