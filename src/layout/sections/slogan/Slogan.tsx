import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {Button} from "components/Button";
import {Container} from "components/Container";
import {FlexWrapper} from "components/FlexWrapper";

export const Slogan: React.FC = () => {
    const onclickBtn=()=>{
        window.location.href= '#contact'
    }
    return (
        <StyledSlogan id={'slogan'}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button onClick={onclickBtn}>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  
`