import styles from "./styles.module.css"


import { ButtonType } from "../../types"



interface ButtonProps {
    buttonType: ButtonType;
    placeholderText : string;
}



export default function Button({buttonType, placeholderText}: ButtonProps){
    return (
        <input type={buttonType} value={placeholderText} className={`${styles.button}`} />
    )
}