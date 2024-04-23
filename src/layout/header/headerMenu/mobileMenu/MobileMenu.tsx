import React, {useState} from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from 'layout/header/headerMenu/HeaderMenu_Styles';

type MenuItemsProps = {
    items: string[]
}
export const MobileMenu: React.FC<MenuItemsProps> = ({items}: MenuItemsProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerClick =()=>{
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=> setMenuIsOpen(false)}>
                <Menu items={items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


