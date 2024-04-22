import React from 'react';
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";
import {S} from "./Footer_Styles";

const socialItemData = [
    {iconId: "icon-react"},
    {iconId: "icon-react"},
    {iconId: "icon-react"}
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Siarhei Zaikouski</S.Name>
                <S.SocialList>
                    {socialItemData.map((icon, index) =>
                        <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon height={"21"} width={"21"} viewBox={"0 0 120 120"} iconId={icon.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>)}
                </S.SocialList>
                <S.Copyright>© 2024 Siarhei Zaikouski, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

