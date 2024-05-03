import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {SectionTitle} from "components/SectionTitle";
import {Skill} from "layout/sections/skills/skill/Skill";
import {Container} from "components/Container";
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "javascript",
        title: "javascript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "html",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },

    {
        iconId: "react",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "redux",
        title: "redux",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "TypeScript",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "styledComponent",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "css",
        title: "css3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "storybook",
        title: "storybook",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "sass",
        title: "sass",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
]


export const Skills = () => {
    return (
        <StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade damping={0.2} style={{margin: '0 auto'}}>
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



