import { UseFormRegister } from 'react-hook-form';

import { useThemeContext } from '../../context/ThemeContext';

import { SearchParams } from '../../types'

import styles from './styles.module.css';




interface SearchInputProps {
 
    register : UseFormRegister<{
        jobDescriptor: string;
        jobLocation: string;
        fullTime: boolean;
        partTime: boolean;
    }>,
    searchParam : SearchParams,
    Icon : React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }> | null,
    placeholder : string;
}



export default function SearchInput({register, searchParam, Icon, placeholder} : SearchInputProps){

    const { theme } = useThemeContext()

    return (
        <div className={`flex align-center ${styles["searchinput-container"]} ${styles[`${theme}`]}`}>
            {Icon && <Icon fill='#5964E0'/>}
            <input placeholder={placeholder} className={ `flex ${styles["searchinput-box"]}`} {...register(searchParam)}/>
        </div>
    )
}