import Cloud from '../Cloud/Cloud';
import style from './HeadingTitle.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '@utils/variants';
const { title, layout } = style;
const HeadingTitle = ({ children, text }: { children: string, text?: string }) => {
    return (
        <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className={title}>
            <Cloud />
            <div className={layout}>
                <h2>{children}</h2>
                <p>{text}</p>
            </div>
            <Cloud flip={true} />
        </motion.div>

    )
}

export default HeadingTitle
