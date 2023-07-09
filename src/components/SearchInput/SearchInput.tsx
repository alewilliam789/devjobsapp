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
    }>   
}



export default function SearchInput({register, searchParam, Icon} : SearchInputProps){

    return (
        <div className='flex'>
            <Icon />
            <input className={ `styles["search-input"]`} {...register(searchParam)}/>
        </div>
    )
}