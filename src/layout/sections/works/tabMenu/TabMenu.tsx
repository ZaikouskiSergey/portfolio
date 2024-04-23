import React from 'react';
import styled from "styled-components";
import {Link} from "components/Link";
import {StatusType} from "layout/sections/works/Works";

type MenuItemsProps = {
    items: Array<{
        title: string
        status: StatusType
    }>
    changeFilterStatus: (value: StatusType) => void
    currentFilterStatus: StatusType
}
export const TabMenu = ({items, changeFilterStatus, currentFilterStatus}: MenuItemsProps) => {
    return (
        <StyledTabMenu>
            <ul>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <Link active={currentFilterStatus === item.status}
                              onClick={() => changeFilterStatus(item.status)}
                              as={'button'}>
                            {item.title}
                        </Link>
                    </ListItem>))}
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
const ListItem = styled.li`

`

