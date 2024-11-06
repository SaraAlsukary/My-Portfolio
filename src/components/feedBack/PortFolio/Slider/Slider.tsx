import Slide from "../Slide/slide";
import style from './slider.module.css';
import LeftAngle from '@assets/Svgs/portfolio/leftAngle.svg?react';
import RightAngle from '@assets/Svgs/portfolio/rightAngle.svg?react';
const { slider, slides, fa, navigation, next, nextPrev, navigationNextPrev, prev } = style;
type TSlider = {
    images: Object[],
    active: number,
    setActive: (value: any) => void
}
const Slider = ({ images, active, setActive }: TSlider) => {
    const onNext = () => {
        if (active < images.length - 1) {
            setActive(active + 1);
        }
    };

    const onPrev = () => {
        if (active > 0) {
            setActive(active - 1);
        }
    };

    return (
        <div className={slider}>
            <div className={slides}>
                {images.map((e: any, i) => (
                    <Slide key={e.caption} {...e} active={i === active} />
                ))}
            </div>
            <div className={navigation}>
                <div className={navigationNextPrev}>
                    <div className={`${nextPrev} ${prev}`} onClick={onPrev}>
                        <LeftAngle style={{ width: '50px', height: '50px' }} className={fa} />
                    </div>
                    <div className={`${nextPrev} ${next}`} onClick={onNext}>
                        <RightAngle style={{ width: '50px', height: '50px' }} className={fa} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Slider;