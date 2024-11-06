import style from './Cloud.module.css';
import cloud from '@assets/imgs/cloud.png';
import cloudWhite from '@assets/imgs/whiteCloud.png';
import { useContext } from 'react';
import { ThemeContext } from 'src/Pages/HomePage';

const Cloud = ({ flip }: { flip?: boolean }) => {
    const { cloudImg } = style;
    const theme = useContext(ThemeContext);
    return (
        <div className={cloudImg}>
            <img src={theme === 'dark' ? cloudWhite : cloud} alt="" style={flip ? { transform: 'scaleX(-1)' } : {}} />
        </div>
    )
}

export default Cloud
