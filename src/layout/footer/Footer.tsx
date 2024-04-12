import React from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";
import {theme} from "styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Siarhei Zaikouski</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21"} width={"21"} iconId={"icon-react"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21"} width={"21"} iconId={"icon-react"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Siarhei Zaikouski, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primiryBg};
  padding: 40px 0;
`
const Name = styled.h5`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
  
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  
`
const SocialItem = styled.li`
    
    
`
const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  
  color: ${theme.colors.accent};
  &:hover{
    color: ${theme.colors.primiryBg};
    transform: translateY(-2px);
  }
`
const Copyright = styled.small`
  
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`
