import React from 'react';
import styled from "styled-components";
import {Link} from "components/Link";
import {theme} from "styles/Theme";
import {Button} from "components/Button";

type WorkProps = {
    title: string
    text: string
    src: string
}
export const Work = ({title, text, src}: WorkProps) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={src} alt={""}/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Link href={"#"}>Demo</Link>
                <Link href={"#"}>Code</Link>
            </Description>

        </StyledWork>
    );
};
const StyledWork = styled.div`
  width: 100%;
  max-width: 540px;
  background-color: ${theme.colors.secondaryBg};
  object-fit: cover;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const Description = styled.div`
  padding: 25px 20px;

`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &::before{
      width: 100%;
      height: 100%;
    }

  }


`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

`

const Title = styled.h3`
  text-transform: capitalize;

`
const Text = styled.p`
  margin: 14px 0 10px;


`


