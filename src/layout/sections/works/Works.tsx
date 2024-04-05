import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {Menu} from "components/menu/Menu";
import {FlexWrapper} from "components/FlexWrapper";
import {Work} from "layout/sections/works/work/Work";
import picture from '../../../assets/images/snapedit_1692384718547.svg'

export const Works = () => {
    const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu items={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Counter"} src={picture} text={"Lorem ipsum dolor sit amet"}/>
                <Work title={"Social network"} src={""} text={"Lorem ipsum dolor sit amet"}/>
            </FlexWrapper>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: darkseagreen;
`