import {theme} from "styles/Theme";
import styled from "styled-components";

const Contact = styled.section`
  position: relative;

`
const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 16px;

  textarea {
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
  width: 100%;

  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};

  padding: 7px 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};
  &::placeholder {
    text-transform: capitalize;
    color: ${theme.colors.placeholderColor}    
  }  
  &:focus-visible{
    outline: 1px solid ${theme.colors.borderColor};
  } 
`

export const S ={
    Contact,
    Field,
    Form
}