import React from 'react';
import styled from "styled-components";

type MenuItemsProps = {
    items: string[]
}
export const Menu = ({items}: MenuItemsProps) => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item, index) => (
                    <li key={index}><a href="#">{item}</a></li>))}

            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }
`

