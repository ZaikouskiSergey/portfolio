import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])
    return (
        <>
            {showBtn && <StyledGoTopBtn onClick={() => {
                scroll.scrollToTop()
            }}>
                <Icon iconId={'upTopBtn'} height={'15px'} width={'16px'} viewBox={'0 0 30 20'}/>
            </StyledGoTopBtn>}

        </>
    );
};

const StyledGoTopBtn = styled.button`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 30px;
  bottom: 30px;

`