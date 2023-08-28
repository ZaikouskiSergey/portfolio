import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import Icon from "components/icon/Icon";
import {SectionTitle} from "components/SectionTitle";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper>
                <Icon iconId={"icon-html"}/>
                <Icon iconId={"icon-css"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
    
`



