import React from 'react';
import {S} from 'layout/header/headerMenu/HeaderMenu_Styles';

type MenuItemsProps = {
    items: string[]
}

export const Menu: React.FC<MenuItemsProps> = ({items}: MenuItemsProps) => {
    return (
        <ul>
            {items.map((item, index) => (
                <S.ListItem key={index}>
                    <S.Link href="#">
                        {item}
                        <S.Mask><span>{item}</span></S.Mask>
                        <S.Mask><span>{item}</span></S.Mask>
                    </S.Link>
                </S.ListItem>))}

        </ul>
    );
};

