import React from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from 'layout/header/headerMenu/HeaderMenu_Styles';


export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu />
        </S.DesktopMenu>
    );
};

