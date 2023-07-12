import {useState, useEffect} from 'react';

import {ReactComponent as LightMode} from '../../assets/desktop/icon-sun.svg';
import {ReactComponent as DarkMode} from '../../assets/desktop/icon-moon.svg';

import styles from './styles.module.css';



export default function ThemeSelector(){

    const [toggle, setToggle] = useState<boolean| null>(null)


    function handleClick(){
        setToggle((prevState)=>{
            if(prevState == null){
                true
            }
            return !prevState
        })
    };


    return (
        <>
        <div className={`flex align-center ${styles['themeselector-container']}`}>
            <LightMode />
            <div className={`flex ${toggle || toggle ? "justify-end" : "justify-start"} ${styles['themeselector-base']}`} onClick={handleClick}>
                <div className={`animate__animated ${toggle ? "animate__slideInLeft" : (toggle != null && "animate__slideInRight")} animate__faster ${styles['themeselector-circle']}`}></div>
            </div>
            <DarkMode />
        </div>
        </>
    )
}