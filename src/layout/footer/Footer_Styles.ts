import styled from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

const Footer = styled.footer`
  position: relative;
  background-color: ${
          theme.colors.primiryBg
  };
  padding: 40px 0;
`
const Name = styled.h5`
  ${
          font({family: "'Josefin Sans', sans-serif", weight: 700, fMax: 22, fMin: 16})
  };
  letter-spacing: 3px;


`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`
`
const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;

  color: ${
          theme.colors.primiryBg
  };

  &:hover {
    color: ${theme.colors.primiryBg};
    transform: translateY(-3px);
    //background-color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
  }
`
const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`
export const S = {
    Footer,
    Name,
    SocialList,
    SocialLink,
    SocialItem,
    Copyright
}