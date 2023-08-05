import { useState } from 'react';

import { useThemeContext } from '../../context/ThemeContext';

import {ReactComponent as LightMode} from '../../assets/desktop/icon-sun.svg';
import {ReactComponent as DarkMode} from '../../assets/desktop/icon-moon.svg';

import styles from './styles.module.css';




export default function ThemeSelector(){

    const [toggle, setToggle] = useState<boolean| null>(null)

    const { theme, setTheme } = useThemeContext();


    function handleClick(){
        setToggle((prevState)=>{
            if(prevState == null){
                return (theme == "day" ? false : true)
            }
            else if(theme == "day"){
                return false
            }
            return true
        })
        setTheme((prevState)=>{
            if(prevState == "day"){
                localStorage.setItem("theme",`night`)
                return "night"
            }
            else {
                localStorage.setItem("theme",`day`)
                return "day"
            }
        })
    };


    return (
        <>
        <div className={`flex align-center ${styles['themeselector-container']}`}>
            <LightMode />
            <div className={`flex ${theme == "day" ? "justify-start" : "justify-end"} ${styles['themeselector-base']}`} onClick={handleClick}>
                <div className={`animate__animated ${theme =="night" ? (toggle != null && "animate__slideInLeft") : (toggle != null && "animate__slideInRight")} animate__faster ${styles['themeselector-circle']}`}></div>
            </div>
            <DarkMode />
        </div>
        </>
    )
}
