import style from './Slide.module.css';
const { slide, actives } = style;
type TSlide = {
    image_url: string,
    caption: string,
    active: boolean,
    url: string
}
const Slide = ({ image_url, caption, active, url }: TSlide) => {
    return (
        <a href={url}>
            <div className={active ? `${actives} ${slide}` : `${slide}`}>
                <img src={image_url} alt={caption} />
                <span>{caption}</span>
            </div>
        </a>



    );
};
export default Slide;