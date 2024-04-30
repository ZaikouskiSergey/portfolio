import React from 'react';
import {Icon} from "components/icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={"icon-logo"} width={'30'}/>
        </a>
    );
};



