import React, {useState} from 'react';
import {S} from "../works/Works_Styles";
import {SectionTitle} from "components/SectionTitle";
import {FlexWrapper} from "components/FlexWrapper";
import {Work} from "layout/sections/works/work/Work";
import picture from '../../../assets/images/snapedit_1692384718547.svg';
import coinMarket from '../../../assets/projectsScreen/coinMarket.png'
import kitchenMaster from '../../../assets/projectsScreen/kitchenMaster.png'
import barMaster from '../../../assets/projectsScreen/barMaster.png'
import taskManager from '../../../assets/projectsScreen/task_manager.png'
import cards from '../../../assets/projectsScreen/cards.png'
import {Container} from "components/Container";
import {TabMenu} from "layout/sections/works/tabMenu/TabMenu";
import {AnimatePresence, motion} from "framer-motion"

export type StatusType = "all" | "landing" | "react" | "spa"

const worksData = [


    {
        title: "Bar Master",
        src: barMaster,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
        demo: 'https://bar-master.vercel.app/',
        code: 'https://github.com/ZaikouskiSergey/BarMaster'
    },
    {
        title: "Kitchen Master",
        src: kitchenMaster,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
        demo: 'https://kitchen-master-ashen.vercel.app/',
        code: 'https://github.com/ZaikouskiSergey/KitchenMaster'
    },
    {
        title: "Cards",
        src: cards,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
        demo: 'https://cards-lac-project.vercel.app/',
        code: 'https://github.com/Archi999999/cards'
    },
    {
        title: "Coin Market",
        src: coinMarket,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolomagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
        demo: 'https://coin-market-alpha.vercel.app/',
        code: 'https://github.com/Archi999999/coinMarket'
    },
    {
        title: "Task Manager",
        src: taskManager,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        demo: 'https://zaikouskisergey.github.io/todolist/',
        code: 'https://github.com/ZaikouskiSergey/todolist'
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
                                        src={work.src}
                                        demo={work.demo}
                                        code={work.code}
                                    />
                                </motion.div>
                            )
                        )}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

