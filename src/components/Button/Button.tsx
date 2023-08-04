import styles from "./styles.module.css"


import { ButtonType, ButtonSize } from "../../types"



interface ButtonProps {
    buttonType: ButtonType;
    placeholderText : string | undefined;
    handleClick: (()=>void) | undefined;
    size?: ButtonSize;
    bgColor?: string;
    textColor?: string;
    children?: string | JSX.Element
}



export default function Button({buttonType, handleClick, size, bgColor, textColor, children, placeholderText}: ButtonProps){
    return (
        <button type={buttonType} onClick={handleClick} className={`${styles.button}`} style={{width:`${size?.width || "141px"}`, height:`${size?.height || "48px"}`,padding:`${ size ? "0px 5px":""}`,backgroundColor:`${bgColor ? bgColor : "#5964E0"}`,color:`${textColor ? textColor : "white"}`}}>{children || placeholderText}</button>
    )
}