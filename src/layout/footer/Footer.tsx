import React from 'react';
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";
import {S} from "./Footer_Styles";

const socialItemData = [
    {iconId: "github", href:'https://github.com/ZaikouskiSergey' },
    {iconId: "linkedin", href:'https://www.linkedin.com/in/siarhei-zaikouski/'},
    {iconId: "telegram", href: 'https://t.me/SergeyZaikouski'}
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Siarhei Zaikouski</S.Name>
                <S.SocialList>
                    {socialItemData.map((icon, index) =>
                        <S.SocialItem key={index}>
                            <S.SocialLink target={'_blank'} href={icon.href}>
                                <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={icon.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>)}
                </S.SocialList>
                <S.Copyright>© 2024 Siarhei Zaikouski, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

