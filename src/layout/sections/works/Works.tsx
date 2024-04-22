import React from 'react';
import {S} from "../works/Works_Styles";
import {SectionTitle} from "components/SectionTitle";
import {FlexWrapper} from "components/FlexWrapper";
import {Work} from "layout/sections/works/work/Work";
import picture from '../../../assets/images/snapedit_1692384718547.svg'
import {Container} from "components/Container";
import {TabMenu} from "layout/sections/works/tabMenu/TabMenu";

const workData=[
    { title: "Counter",
        src: picture,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    { title: "Social network",
        src: picture,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]

export const Works: React.FC = () => {
    const worksItems = ["all", "LANDING Page", "REACT", "SPA"]
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={'wrap'}>
                    {workData.map((work, index) => <Work
                        key={index}
                        title={work.title}
                        text={work.text}
                        src={work.src}/>)}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

