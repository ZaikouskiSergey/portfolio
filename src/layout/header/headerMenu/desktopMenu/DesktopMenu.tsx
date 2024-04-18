import React from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from 'layout/header/headerMenu/HeaderMenu_Styles';

type MenuItemsProps = {
    items: string[]
}
export const DesktopMenu: React.FC<MenuItemsProps> = ({items}: MenuItemsProps) => {
    return (
        <S.DesktopMenu>
            <Menu items={items}/>
        </S.DesktopMenu>
    );
};

