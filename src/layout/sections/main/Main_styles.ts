import {theme} from "styles/Theme";
import styled from "styled-components";
import {font} from "styles/Common";

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
 

  &::before {
    z-index: -1;
    content: " ";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    
    @media ${theme.media.mobile}{
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
  @media ${theme.media.mobile}{
    margin-top: 65px;
  }
`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  margin-left: 5px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`
const MainTitle = styled.h1`
  ${font({weight: 400, fMax: 27, fMin: 20})};
`
const MainName = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, fMax: 50, fMin: 36})};
  letter-spacing: 0.05em;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
  
  @media ${theme.media.mobile}{
    margin: 15px 0 22px ;
  }


`
const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`

export const S = {
    StyledMain, SmallText, MainName, MainTitle, PhotoWrapper, Photo

}