import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {Icon} from "components/icon/Icon";
import {Slider} from "components/slider/Slider";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {S} from "layout/sections/skills/skill/Skill_styles";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={"icon-logo"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    )
}
const StyledTestimony = styled.section`

  min-height: 50vh;

  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }
`


