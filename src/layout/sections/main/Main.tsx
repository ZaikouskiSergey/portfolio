import React from 'react';
import styled from "styled-components";
import avatar from "../../../assets/images/my_new-avatar-webp.webp"
import {FlexWrapper} from "components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} >
                <div>
                    <MainSpan>Hi There,</MainSpan>
                    <MainName>I am Siarhei Zaikouski</MainName>
                    <MainTitle>A Front-end Developer</MainTitle>
                </div>
                <Photo src={avatar} alt="avatar"/>

            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain = styled.div`
  background-color: #1F1F20; 


`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1`
  color: #FFFFFF;
  font-size: 27px;

`
const MainName = styled.h2`
  color: #FFFFFF;
  font-size: 50px;
`
const MainSpan = styled.span`
  color: #FFFFFF;
  font-size: 14px;
`

