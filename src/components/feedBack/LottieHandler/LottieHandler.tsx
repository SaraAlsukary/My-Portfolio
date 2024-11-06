import Lottie from "lottie-react";
import Code from '@assets/Lotties/code(1).json';
import style from './LottieHandler.module.css';
const { title } = style;
const lottieFilesMap = {
    Code
};

type LottieHandlerProps = {
    type: keyof typeof lottieFilesMap;
    message?: string;
    className?: string;
    loop?: boolean;
    style?: React.CSSProperties
};

const LottieHandler = ({ type, message, className, loop, style }: LottieHandlerProps) => {


    const lottie = lottieFilesMap[type];

    return (
        <div className={` ${className}`}>
            <Lottie animationData={lottie} style={style} loop={loop} />
            {message && <h3 className={title} style={{ margin: '120px auto', textAlign: 'center', color: 'var(--main-color)' }}
            // style={messageStyle}
            >{message}</h3>}
        </div>
    )
}

export default LottieHandler;
