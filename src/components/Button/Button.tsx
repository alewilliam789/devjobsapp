import styles from "./styles.module.css"


import { ButtonType } from "../../types"



interface ButtonProps {
    buttonType: ButtonType;
    placeholderText : string;
    handleClick : (()=>void) | undefined;
}



export default function Button({buttonType, placeholderText, handleClick}: ButtonProps){
    return (
        <input type={buttonType} value={placeholderText} onClick={handleClick} className={`${styles.button}`} />
    )
}