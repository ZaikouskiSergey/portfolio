import React from 'react';
import styled from "styled-components";
import avatar from "../../../assets/images/my_new-avatar-webp.webp"
import {FlexWrapper} from "components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There,</span>
                    <MainName>I am Siarhei Zaikouski</MainName>
                    <MainTitle>A Front-end Developer</MainTitle>
                </div>
                <img src={avatar} alt="avatar"/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain = styled.div`
  min-height: 100vh;
  background-color:  #1F1F20;
;
  img {
    width: 200px;
    height: 200px;
    border-radius: 230px;
    object-fit: cover;
    background: lightgray 40% / cover -130px 50px;
  }
`
const MainTitle = styled.h1`
    color:  #FFFFFF;

`
const MainName = styled.h2`
  color:  #FFFFFF;
`

