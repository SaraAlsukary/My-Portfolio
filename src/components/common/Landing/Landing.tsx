import img from '@assets/imgs/Landing.jpg'
import arrowImg from '@assets/imgs/Arrow2.png'
import arrowImgWhite from '@assets/imgs/arrowWhite.png';
import { Container } from 'react-bootstrap';
//motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '@utils/variants'
import styles from './Landing.module.css';
import { Button } from '@components/feedBack/index'
import { useContext } from 'react';
import { ThemeContext } from 'src/Pages/HomePage';
const { text, pic, arrow, landing } = styles;
const Landing = () => {
    const downloadFile = () => {
        const fileUrl = '${ process.env.PUBLIC_URL }/cv.pdf';
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "cv.pdf";
        link.click();
    };
    const theme = useContext(ThemeContext);
    return (
        <Container>
            <motion.section
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className={landing} id='home'>
                <div
                    className={text}>
                    <h2>Hi, I'm <span>Sara Alsukary</span></h2>
                    <p>Creative Frontend Developer</p>
                    <p>Feel free to contact me anytime</p>
                    <Button onClick={downloadFile}>Download CV</Button>
                </div>

                <div className={arrow}>
                    <img src={theme === 'dark' ? arrowImgWhite : arrowImg} alt="" />
                </div>
                <div
                    className={pic}>
                    <img src={img} alt="" />
                </div>

            </motion.section>
        </Container>
    )
}

export default Landing
