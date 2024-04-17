import styled from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 600, fMax: 36, fMin: 30})}
  text-align: center;
  letter-spacing: 5px;
  position: relative;
  margin-bottom: 90px;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    
    @media ${theme.media.mobile}{
      bottom: -24px;
    }
  }
`