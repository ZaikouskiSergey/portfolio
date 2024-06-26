import React from 'react';
import avatar from "../../../assets/images/my_new-avatar-webp.webp"
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {S} from "../main/Main_styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    const scale = 1.1;

    return (
        <S.StyledMain id={'home'}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There,</S.SmallText>
                        <S.MainName>I am <span>Siarhei Zaikouski</span></S.MainName>
                        <S.MainTitle>
                            <p>A Front-end Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Front-end Developer.', 'A Web Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt scale={scale} transitionSpeed={2500}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={avatar} alt="avatar"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};


