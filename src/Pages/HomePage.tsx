import { lazy } from 'react'
import './HomePage.css'
import { createContext } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import Up from '@components/feedBack/Up/Up';

const Contact = lazy(() => import('@components/common/Contact/Contact'));
const Footer = lazy(() => import('@components/common/Footer/Footer'));
const Header = lazy(() => import('@components/common/Header/Header'));
const Skills = lazy(() => import('@components/common/Skills/Skills'));
const Landing = lazy(() => import('@components/common/Landing/Landing'));
const Portfolio = lazy(() => import('@components/common/Portfolio/Portfolio'));


export const ThemeContext = createContext('light');
function HomePage() {
  const [theme, setTheme] = useLocalStorage<string>('theme' ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  document.body.dataset.theme = theme;
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Header switchTheme={switchTheme} />
        <Up />
        <Landing />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </ThemeContext.Provider>

    </>
  )
}

export default HomePage