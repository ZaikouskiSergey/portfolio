import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {SectionTitle} from "components/SectionTitle";
import {Skill} from "layout/sections/skills/skill/Skill";
import {Container} from "components/Container";
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "icon-html",
        title: "My Skills",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "icon-html",
        title: "My Skills",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "icon-html",
        title: "My Skills",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "icon-html",
        title: "My Skills",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "icon-html",
        title: "My Skills",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
]


export const Skills = () => {
    return (
        <StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade damping={0.2}>
                        {skillData.map((skill, index) =>
                            (<Skill key={index}
                                    iconId={skill.iconId}
                                    title={skill.title}
                                    description={skill.description}/>))}
                    </Fade>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
  position: relative;
`



