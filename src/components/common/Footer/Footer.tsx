import Love from '@assets/Svgs/Love.svg?react';
import styles from './Footer.module.css';
import { Container } from 'react-bootstrap';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '@utils/variants';
const { footerContainer } = styles;
const Footer = () => {
    return (
        <Container>
            <motion.footer
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className={footerContainer}>
                <p>Made width <Love style={{ width: "20px", height: '20px' }} /> <span>Sara </span></p>

            </motion.footer>
        </Container>
    )
}

export default Footer
