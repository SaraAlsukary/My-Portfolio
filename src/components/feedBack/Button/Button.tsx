import React from 'react'
import styles from './Button.module.css';
const { btn } = styles;
type TButton = {
    children: React.ReactNode,
    onClick?: (e: any) => void
}
const Button = ({ children, onClick }: TButton) => {
    return (
        <button className={btn} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
