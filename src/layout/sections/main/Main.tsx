import React from 'react';
import styled from "styled-components";
import avatar from "../../../assets/images/my_avatar-webp.webp"

export const Main = () => {
    return (
        <StyledMain>
            <div>
                <span>Hi There,</span>
                <span>My name is</span>
                <h2>Siarhei Zaikouski</h2>
                <h1>A Front-end Developer</h1>
            </div>
            <img src={avatar} alt="avatar"/>
        </StyledMain>
    );
};
const StyledMain = styled.main`
    img{
      width: 350px;
      height: 350px;
      border-radius: 230px;
      object-fit: cover;
      background: lightgray 40% / cover -130px 0px ;
    }
`

