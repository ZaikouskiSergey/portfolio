import React from 'react';
import styled from "styled-components";

type WorkProps = {
    title: string
    text: string
    src: string
}
export const Work = ({title, text, src}: WorkProps) => {
    return (
        <StyledWork>
            <Image src={src} alt={""}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>

        </StyledWork>
    );
};
const StyledWork = styled.div`
  width: 100%;
  max-width: 540px;
  object-fit: cover;

`
const Image = styled.img`
  width: 100%;
  height: 260px;

`

const Title = styled.h3`

`
const Text = styled.p`

`
const Link = styled.a`

`

