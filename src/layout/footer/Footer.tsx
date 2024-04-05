import React from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Siarhei</Name>
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
  background-color: mediumpurple;
  min-height: 20vh;
`
const Name = styled.h5`
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
`
const Copyright = styled.small`
`
