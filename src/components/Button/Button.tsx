import styles from "./styles.module.css"


import { ButtonType, ButtonSize } from "../../types"



interface ButtonProps {
    buttonType: ButtonType;
    placeholderText : string | undefined;
    handleClick: (()=>void) | undefined;
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    size?: ButtonSize
}



export default function Button({buttonType, placeholderText, handleClick, Icon, size}: ButtonProps){
    return (
        <button type={buttonType} onClick={handleClick} className={`${styles.button}`} style={{width:`${size?.width || "141px"}`, height:`${size?.height || "48px"}`,padding:`${ size ? "0px 5px":""}`}}>{placeholderText || Icon && <Icon />}</button>
    )
}