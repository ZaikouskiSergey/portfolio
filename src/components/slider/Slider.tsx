import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/Slider.css'
import {S} from "./Slider_Styles";


type SlidePropsType = {
    text: string
    userName: string
}
const Slide = ({userName, text}: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{text}</S.Text>
            <S.Name>@{userName}</S.Name>
        </S.Slide>

    )
}

const items = [
    <Slide
        userName={'ivan ivanow'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing'}
    />,
    <Slide
        userName={'sergey sergeev'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing'}
    />,
    <Slide
        userName={'kuzma kuzmin'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing'}
    />,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);

