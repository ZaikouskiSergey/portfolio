import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {SectionTitle} from "components/SectionTitle";
import {Skill} from "components/skill/Skill";
import {Container} from "components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <Container>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"icon-html"}
                           title={"My Skills"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"icon-react"} title={"My Skills"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"icon-react"} title={"My Skills"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"icon-react"} title={"My Skills"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"icon-react"} title={"My Skills"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"icon-react"} title={"My Skills"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>


                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
  
`



