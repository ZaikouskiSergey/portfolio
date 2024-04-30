import React from 'react';
import {S} from 'layout/header/headerMenu/HeaderMenu_Styles';

const menuItems = [
    {
        title: "Home",
        href: 'home'
    },
    {
        title: "Skills",
        href: 'skills'
    },
    {
        title: "Works",
        href: 'works'
    },
    {
        title: "Testimony",
        href: 'testimony'
    },
    {
        title: "Contact",
        href: 'contact'
    },

]
export const Menu: React.FC = () => {
    return (
        <ul>
            {menuItems.map((item, index) => (
                <S.ListItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        offset={5}
                        spy={true}>
                        {item.title}
                        <S.Mask><span>{item.title}</span></S.Mask>
                        <S.Mask><span>{item.title}</span></S.Mask>
                    </S.NavLink>
                </S.ListItem>))}

        </ul>
    );
};

