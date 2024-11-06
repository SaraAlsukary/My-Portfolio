import ReactIcon from '@assets/Svgs/skills/react.svg?react';
import CSSIcon from '@assets/Svgs/skills/css.svg?react';
import HtmlIcon from '@assets/Svgs/skills/html.svg?react';
import JsIcon from '@assets/Svgs/skills/js.svg?react';
import BootstrapIcon from '@assets/Svgs/skills/bootstrap.svg?react';
import TsIcon from '@assets/Svgs/skills/ts.svg?react';
import ReduxIcon from '@assets/Svgs/skills/redux.svg?react';
import FigmaIcon from '@assets/Svgs/skills/figma.svg?react';
import TailwindIcon from '@assets/Svgs/skills/tailwind.svg?react';
import NodeIcon from '@assets/Svgs/skills/node.svg?react';
import SassIcon from '@assets/Svgs/skills/sass.svg?react';
import styles from "./skills.module.css";
import aboutImg from '@assets/imgs/about.jpg';
import HeadingTitle from "@components/feedBack/HeadingTitle/HeadingTitle";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@utils/variants';
const { title, skillsContainer, skills, skillItem, skillList, about, pic, progress, text, bar, barInner, skillBar, skillPercentage, skillTitle, skillHeader, progressLine, counter, skillItemBox } = styles
const Skills = () => {
    useEffect(() => {
        const skills_wrap = document.getElementById('skillList'),
            skills_bar = document.querySelectorAll(`.${progressLine}`);

        window.addEventListener("scroll", () => {
            skillsEffect();
        })
        function skillsEffect() {
            if (!checkScroll(skills_wrap)) return;
            skills_bar.forEach((skill) => {
                (skill as HTMLElement).style.width = (skill as HTMLElement).dataset.progress!;

            });
        }
        function checkScroll(el: any) {
            let rect = el.getBoundingClientRect();
            if (window.innerHeight >= rect.top + el.offsetHeight) return true;
            return false;
        }
    }, [])
    const skillsIcons = [{
        id: 1,
        Element: <HtmlIcon style={{ widht: '30px', height: '30px' }} />,
    },
    {
        id: 2,
        Element: <CSSIcon style={{ widht: '30px', height: '30px' }} />,

    }, {
        id: 3,
        Element: <JsIcon style={{ width: '50px', height: '50px' }} />
    }, {
        id: 4,
        Element: <BootstrapIcon style={{ width: '50px', height: '50px' }} />

    }, {
        id: 5,
        Element: <TailwindIcon style={{ width: '50px', height: '50px' }} />

    }, {
        id: 6,
        Element: <SassIcon style={{ width: '50px', height: '50px' }} />

    }, {
        id: 7,
        Element: <TsIcon style={{ width: '50px', height: '50px' }} />

    }, {
        id: 8,
        Element: <ReactIcon style={{ width: '50px', height: '50px' }} />

    }, {
        id: 9,

        Element: <ReduxIcon style={{ width: '50px', height: '50px' }} />
    }, {
        id: 10,

        Element: <NodeIcon style={{ width: '50px', height: '50px' }} />

    }, {
        id: 11,
        Element: <FigmaIcon style={{ width: '50px', height: '50px' }} />

    }

    ]
    const skillsProgress = [{
        id: 1,
        title: 'Front-End Development',
        count: '90%'
    }, {
        id: 2,
        title: 'Programming',
        count: '85%'
    }, {
        id: 3,
        title: 'Problem Solving',
        count: '85%'
    }, {
        id: 4,
        title: 'Ui/Ux Design',
        count: '75%'
    }, {
        id: 5,
        title: 'Soft Skills',
        count: '85%'
    }]
    const skillsProgressItems = skillsProgress.map(skill => <div key={skill.id} className={skillItemBox}>
        <div className={skillHeader}>
            <h6 className={skillTitle}>{skill.title}</h6>
            <div className={skillPercentage}>
                <p><span className={counter}>{skill.count}</span></p>
            </div>
        </div>
        <div className={skillBar}>
            <div className={barInner}>
                <div className={`${bar} ${progressLine}`} data-progress={skill.count}></div>
            </div>
        </div>
    </div>)
    const skillsItems = skillsIcons.map(icon => <Col key={icon.id} className={skillItem}>
        {icon.Element}</Col>)

    return (
        <section className={skillsContainer} id="skills">
            <Container>
                <div className={title}>
                    <HeadingTitle text="My Experiences in many languages and techniques">
                        My Skills
                    </HeadingTitle>
                </div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}>
                    <Row className={skills}>
                        {skillsItems}
                    </Row>
                </motion.div>
                <div
                    className={about}>
                    <motion.div
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className={pic}>
                        <img src={aboutImg} alt="" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className={progress}>

                        <div className={text}>
                            <h3>Why do you hire me?</h3>
                            <p>I made creative and professional interfaces with high perfomance</p>
                        </div>
                        <div id='skillList' className={skillList}>
                            {skillsProgressItems}
                        </div>
                    </motion.div>
                </div>
            </Container>

        </section>
    )
}

export default Skills
