import { UseFormRegister } from 'react-hook-form';

import { SearchParams } from '../../types'

import styles from './styles.module.css';



interface SearchInputProps {
 
    register : UseFormRegister<{
        jobDescriptor: string;
        jobLocation: string;
        fullTime: boolean;
    }>,
    searchParam : SearchParams,
    Icon : React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>,
    placeholder : string;
}



export default function SearchInput({register, searchParam, Icon, placeholder} : SearchInputProps){

    return (
        <div className={`flex align-center ${styles["searchinput-container"]}`}>
            <Icon />
            <input placeholder={placeholder} className={ `flex ${styles["searchinput-box"]}`} {...register(searchParam)}/>
        </div>
    )
}