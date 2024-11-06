import BurgerMenu from '@assets/Svgs/Burger.svg?react';
import Close from '@assets/Svgs/close.svg?react';
import Sun from '@assets/Svgs/sun.svg?react';
import Moon from '@assets/Svgs/moon.svg?react';
import { motion } from 'framer-motion';
import { fadeInHeader } from '@utils/variants';
import Logo from "../Logo/Logo"
import styles from './Header.module.css';
import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { TTheme } from '@customtypes/theme';
import { ThemeContext } from 'src/Pages/HomePage';
import { CustomLink } from '@components/feedBack';
const { headerContainer, burger, show, cont } = styles;
const Header = ({ switchTheme }: TTheme) => {

    const [toggle, setToggle] = useState(false);
    const theme = useContext(ThemeContext);
    return (
        <motion.header
            variants={fadeInHeader('down', 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }} className={headerContainer}>
            <Container className={cont}>
                <Logo />
                <nav>
                    <ul className={toggle ? show : ''}>
                        <CustomLink href='#home' >Home</CustomLink>
                        <CustomLink href='#skills' >Skills</CustomLink>
                        <CustomLink href='#portfolio' >Portfolio</CustomLink>
                        <CustomLink href='#contact' >Contact</CustomLink>

                        <li onClick={switchTheme}>{
                            theme === 'dark' ? <Sun style={{ cursor: 'pointer', width: '30px', height: '30px' }} /> : <Moon style={{ cursor: 'pointer', width: '30px', height: '30px' }} />
                        }</li>
                    </ul>
                </nav>
                <div onClick={() => setToggle(!toggle)} className={burger}>
                    {!toggle ? <BurgerMenu style={{ width: '40px', heigh: '40px' }} /> :
                        <Close style={{ width: '40px', heigh: '40px' }} />}
                </div>
            </Container>
        </motion.header>
    )
}

export default Header;
