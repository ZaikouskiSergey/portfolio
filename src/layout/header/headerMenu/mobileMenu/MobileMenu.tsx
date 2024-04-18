import React from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from 'layout/header/headerMenu/HeaderMenu_Styles';

type MenuItemsProps = {
    items: string[]
}
export const MobileMenu: React.FC<MenuItemsProps> = ({items}: MenuItemsProps) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu items={items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


