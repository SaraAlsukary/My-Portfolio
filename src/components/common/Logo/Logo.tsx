import LottieHandler from '@components/feedBack/LottieHandler/LottieHandler';
import style from './Logo.module.css';
const { logo, text } = style;
const Logo = () => {
  return (
    <div className={logo}>
      <div className={text}>
        <h1>Sara</h1>
      </div>
      <LottieHandler style={{ width: '70px', height: '70px', position: 'absolute', left: '0', top: '0' }} type='Code' loop={true} />
    </div>
  )
}

export default Logo
