import React, {MouseEvent} from 'react';
import {Icon} from "components/icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    const handleClick = (event:MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        scroll.scrollToTop();
    };
    return (
        <a href="#" onClick={handleClick}>
            <Icon iconId={"icon-logo"} width={'30'}/>
        </a>
    );
};



