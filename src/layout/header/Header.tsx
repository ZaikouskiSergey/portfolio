import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <a href='#'>
                <img src={""} alt={''}/>
            </a>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Tech Stack</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  background-color: #86ea9e;
`
export default Header;
