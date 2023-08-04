import styles from "./styles.module.css"


import { ButtonType, ButtonSize } from "../../types"



interface ButtonProps {
    buttonType: ButtonType;
    placeholderText : string | undefined;
    handleClick: (()=>void) | undefined;
    size?: ButtonSize;
    buttonStyles?: string;
    children?: string | JSX.Element
}



export default function Button({buttonType, handleClick, size, buttonStyles, children, placeholderText}: ButtonProps){
    return (
        <button type={buttonType} onClick={handleClick} className={`${styles['button']} ${styles[`${buttonStyles ? buttonStyles : "button-1"}`]}`} style={{width:`${size?.width || "141px"}`, height:`${size?.height || "48px"}`,padding:`${ size ? "0px 5px":""}`}}>{children || placeholderText}</button>
    )
}