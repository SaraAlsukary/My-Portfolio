import UpIcon from '@assets/Svgs/up.svg?react';
import style from './Up.module.css';
import { useEffect, useState } from 'react';
const { up, goTop, goTopHidden } = style;
const Up = () => {
    const [scrollPosition, setSrollPosition] = useState(0);
    const [showGoTop, setshowGoTop] = useState("goTopHidden");
    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    }, [scrollPosition]);
    const handleVisibleButton = () => {
        const position = document.documentElement.scrollTop;
        setSrollPosition(position);

        if (scrollPosition > 50) {
            return setshowGoTop("goTop");
        } else if (scrollPosition < 50) {
            return setshowGoTop("goTopHidden");
        }
    };
    const scrollUp = () => {

        document.documentElement.scrollTop = 0;
    }
    return (
        <div id='scrollItem' onClick={scrollUp} className={showGoTop === 'goTop' ? `${up} ${goTop}` : `${up} ${goTopHidden}`}>
            <UpIcon style={{ width: '30px', height: '30px' }} />
        </div>
    )
}

export default Up
