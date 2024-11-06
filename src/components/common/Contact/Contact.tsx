import Github from '@assets/Svgs/contact/github.svg?react'
import Email from '@assets/Svgs/contact/email.svg?react'
import Linkedin from '@assets/Svgs/contact/linkedin.svg?react'
import styles from "./Contact.module.css";
import HeadingTitle from '@components/feedBack/HeadingTitle/HeadingTitle';
import { Container } from 'react-bootstrap';
//motion
import { motion } from 'framer-motion'
import { fadeIn } from '@utils/variants';
const { contactContainer, text, links, link } = styles
const Contact = () => {
    return (
        <motion.section
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            id="contact" className={contactContainer}>
            <Container>
                <div className={text}>
                    <HeadingTitle text='Feel free to reach out!'>Contact</HeadingTitle>
                </div>
                <ul className={links}>
                    <li className={link}>
                        <a href="mailto:saraals6216@gmail.com">
                            <Email style={{ width: '30px', height: '30px' }} />
                        </a>
                    </li>
                    <li className={link}>

                        <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHo0wV6txGzKwAAAZMCJ27YxGPnG949HzCE63fkLEgDNBjhiBWPsq4ESVtr67AShkrqsmXWyW-JgJICZaH8zYPn_-lkv3pWno6K3ZzPrlnRoqKWrHrgC-dtY99KA4RIzZDtLdI=&original_referer=https://github.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsara-alsukary-0ab7b62a1%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"> <Linkedin
                            style={{ width: '30px', height: '30px' }}
                        /></a>
                    </li>
                    <li className={link}>

                        <a href="https://www.github.com/SaraAlsukary">        <Github style={{ width: '30px', height: '30px' }} /></a>
                    </li>
                </ul>
            </Container>
        </motion.section>
    );
};
export default Contact
