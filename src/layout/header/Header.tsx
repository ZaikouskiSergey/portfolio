import React, {useEffect, useState} from 'react';
import {Logo} from "components/logo/Logo";
import {IconContact} from "layout/header/IconContact";
import {Container} from "components/Container";
import {FlexWrapper} from "components/FlexWrapper";
import {MobileMenu} from "layout/header/headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'
import {DesktopMenu} from "layout/header/headerMenu/desktopMenu/DesktopMenu";


const menuItems = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)

        return () => window.removeEventListener("resize", handleWindowResize)
    })

    return (
        <S.StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width > breakpoint
                        ? <DesktopMenu items={menuItems}/>
                        : <MobileMenu items={menuItems}/>}
                    <IconContact/>
                </FlexWrapper>
            </Container>
        </S.StyledHeader>
    );
};


