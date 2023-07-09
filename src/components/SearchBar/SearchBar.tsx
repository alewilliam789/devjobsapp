import {useForm} from 'react-hook-form'
import SearchInput from '../SearchInput/SearchInput';

import styles from './styles.module.css';



import {ReactComponent as SearchIcon} from '../../assets/desktop/icon-search.svg'
import {ReactComponent as LocationIcon} from '../../assets/desktop/icon-location.svg'

export default function SearchBar(){
    
    const {register, handleSubmit} = useForm(
        {
            defaultValues :{
                jobDescriptor : "Filter by title, companies, expertise...",
                jobLocation: "Filter by location...",
                fullTime: false
            }
        });

        function onSubmit(){

        }

        return (
            <form id='job' className={`flex ${styles['search-bar']}`} onSubmit={handleSubmit(onSubmit)}>
                <SearchInput register={register} searchParam={"jobDescriptor"} Icon={SearchIcon}/>
                <SearchInput register={register} searchParam={"jobLocation"}  Icon={LocationIcon} />
                <input type="checkbox" {...register("fullTime")} />
            </form>

        )

}