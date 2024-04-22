import React from 'react';
import {Link} from "components/Link";
import {Button} from "components/Button";
import {S} from "../Works_Styles";

type WorkProps = {
    title: string
    text: string
    src: string
}
export const Work: React.FC<WorkProps> = ({title, text, src}: WorkProps) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={src} alt={""}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link href={"#"}>Demo</Link>
                <Link href={"#"}>Code</Link>
            </S.Description>
        </S.Work>
    );
};
