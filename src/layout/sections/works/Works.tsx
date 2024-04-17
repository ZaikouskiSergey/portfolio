import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {FlexWrapper} from "components/FlexWrapper";
import {Work} from "layout/sections/works/work/Work";
import picture from '../../../assets/images/snapedit_1692384718547.svg'
import {Container} from "components/Container";
import {TabMenu} from "layout/sections/works/tabMenu/TabMenu";

export const Works = () => {
    const worksItems = ["all", "LANDING Page", "REACT", "SPA"]
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={'wrap'}>
                    <Work title={"Counter"} src={picture} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work title={"Social network"} src={""} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${FlexWrapper}{
    gap: 30px;
  }
  
`