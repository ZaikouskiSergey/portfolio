import React from 'react';
import styled from "styled-components";
import avatar from "../../../assets/images/my_new-avatar-webp.webp"
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {theme} from "styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There,</SmallText>
                        <MainName>I am <span>Siarhei Zaikouski</span></MainName>
                        <MainTitle>A Front-end Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={avatar} alt="avatar"/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.div`
  background-color: #1F1F20;
  min-height: 100vh;
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before{
    z-index: -1;
    content: " ";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;   
  }
`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400

`
const MainName = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-size: 50px;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }


`
const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

