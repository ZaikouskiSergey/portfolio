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

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`
const ListItem= styled.li`
  
`

