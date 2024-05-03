import React from 'react';
import {Link} from "components/Link";
import {Button} from "components/Button";
import {S} from "../Works_Styles";
import {useNavigate} from "react-router-dom";

type WorkProps = {
    title: string
    text: string
    src: string
    demo: string
    code: string
}
export const Work: React.FC<WorkProps> = ({title, text, src, demo, code}: WorkProps) => {

    const onclickBtn=()=>{
        window.location.href= (demo)
    }
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={src} alt={""}/>
                <Button onClick={onclickBtn}>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link target={'_blank'} active href={demo}>Demo</Link>
                <Link target={'_blank'} href={code}>Code</Link>
            </S.Description>
        </S.Work>
    );
};
