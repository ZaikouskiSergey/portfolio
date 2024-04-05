import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {Button} from "components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <StyledField placeholder={'name'}/>
                <StyledField placeholder={"subject"}/>
                <StyledField placeholder={"message"} as={"textarea"}/>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};
const StyledContact = styled.section`
  background-color: bisque;
  min-height: 50vh;
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
`
const StyledField = styled.input`
`



