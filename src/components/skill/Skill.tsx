import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";
type SkillProps={
    iconId: string
    title: string
    description: string
}

export const Skill = ({title, iconId, description}: SkillProps) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId} width={'50'}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{description}</SkillText>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  background-color: darkseagreen;

`
const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`
