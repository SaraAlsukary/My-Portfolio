import Search from '@assets/Svgs/portfolio/search.svg?react';
import { useState } from "react";
import pets from '@assets/imgs/Portfolio/PetsHome.png';
import cyborg from '@assets/imgs/Portfolio/Cyborg.png';
import BooksCorner from '@assets/imgs/Portfolio/BooksCorner.png';
import todolist from '@assets/imgs/Portfolio/todolist.png';
import binko from '@assets/imgs/Portfolio/binko.png';
import Modal from "@components/feedBack/PortFolio/Model/Model";
import Slider from "@components/feedBack/PortFolio/Slider/Slider";
import { Container } from "react-bootstrap";
import style from './Portfolio.module.css';
import { HeadingTitle } from '@components/feedBack/index';
// motion
import { motion } from 'framer-motion'
import { fadeIn } from '@utils/variants';
const { imageList, port, imageItem, actives, portfolioInfo, icon, title, fa } = style;
const Portfolio = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(0);

    const images = [
        {
            image_url: pets,
            caption: "Pets Home is an e-commerce for pets",
            url: 'PetsHome'
        },
        {
            image_url:
                BooksCorner, caption: "Books Corner is a website for downloading books",
            url: 'BooksCorner'

        },
        {
            image_url: todolist,
            caption: "TodoList app",
            url: 'TodoList'

        },
        {
            image_url: cyborg,
            caption: "Cyborg is a website for downloading games",
            url: 'Cyborg'

        },
        {
            image_url: binko,
            caption: "Binko is a Books Community",
            url: 'BinkoWeb'

        }
    ];

    const handleClick = (index: number) => {
        setActive(index);
        setShow(true);
    };

    const onClose = () => {
        setShow(false);
    };

    return (
        <motion.section
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className={port} id='portfolio'>
            <Container>
                <div className={title}>
                    <HeadingTitle text='my latest work'>Portfolio</HeadingTitle>
                </div>
                <Modal show={show} title="my Projects" onClose={onClose}>
                    <Slider images={images} active={active} setActive={setActive} />
                </Modal>
                <div className={imageList}>
                    {images.map((e, i) => (
                        <div
                            className={i === active ? `${imageItem} ${actives}` : `${imageItem}`}
                            onClick={() => handleClick(i)}
                            key={e.caption}
                        >
                            <img src={e.image_url} alt={e.caption} />
                            <div className={portfolioInfo}>
                                <h4>{e.caption}</h4>
                                <div className={icon}>
                                    <Search style={{ width: '20px', height: '20px' }} className={fa} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </motion.section>
    )
};
export default Portfolio;