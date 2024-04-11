import React from 'react';
import styled from "styled-components";
import {Link} from "components/Link";

type MenuItemsProps = {
    items: string[]
}
export const TabMenu = ({items}: MenuItemsProps) => {
    return (
        <StyledTabMenu>
            <ul>
                {items.map((item, index) => (
                    <ListItem key={index}><Link href="#">{item}</Link></ListItem>))}
            </ul>
        </StyledTabMenu>
    );
};
const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    list-style-type: none;
    justify-content: center;
  }  
`
const ListItem= styled.li`
  
`

