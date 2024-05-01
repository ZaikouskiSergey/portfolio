import React, {useState} from 'react';
import {S} from "../works/Works_Styles";
import {SectionTitle} from "components/SectionTitle";
import {FlexWrapper} from "components/FlexWrapper";
import {Work} from "layout/sections/works/work/Work";
import picture from '../../../assets/images/snapedit_1692384718547.svg'
import {Container} from "components/Container";
import {TabMenu} from "layout/sections/works/tabMenu/TabMenu";
import {AnimatePresence, motion} from "framer-motion"

export type StatusType = "all" | "landing" | "react" | "spa"

const worksData = [
    {
        title: "Counter",
        src: picture,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    },
    {
        title: "Social network",
        src: picture,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react"
    },
    {
        title: "Social network",
        src: picture,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react"
    },
    {
        title: "Social network",
        src: picture,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    },
    {
        title: "Social network",
        src: picture,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react"
    },
]

const tabItems: { title: string, status: StatusType }[] = [
    {
        title: "All",
        status: "all"
    }, {
        title: "LANDING Page",
        status: "landing"
    }, {
        title: "REACT",
        status: "react"
    }, {
        title: "SPA",
        status: "spa"
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<StatusType>('all')

    let filteredWorks = worksData

    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: StatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={tabItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={'wrap'}>
                    <AnimatePresence>
                        {filteredWorks.map((work, index) => (
                                <motion.div
                                    style={{width: '400px', flexGrow: '1', maxWidth: '540px', display: 'flex', margin: '0 auto'}}
                                    layout
                                    key={index}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                    <Work
                                        key={index}
                                        title={work.title}
                                        text={work.text}
                                        src={work.src}/>
                                </motion.div>
                            )
                        )}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

