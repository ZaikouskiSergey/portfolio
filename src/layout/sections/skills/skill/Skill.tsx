import React from 'react';
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";
import {S} from "../skill/Skill_styles";

type SkillProps = {
    iconId: string
    title: string
    description: string
}

export const Skill = ({title, iconId, description}: SkillProps) => {
    return (
        <S.StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={iconId} width={'50'}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                {/*<S.SkillText>{description}</S.SkillText>*/}
            </FlexWrapper>
        </S.StyledSkill>
    );
};
