import {useForm} from 'react-hook-form'
import SearchInput from '../SearchInput/SearchInput';

import styles from './styles.module.css';



import {ReactComponent as SearchIcon} from '../../assets/desktop/icon-search.svg'
import {ReactComponent as LocationIcon} from '../../assets/desktop/icon-location.svg'
import Button from '../Button/Button';

export default function SearchBar(){
    
    const {register, handleSubmit} = useForm(
        {
            defaultValues :{
                jobDescriptor : "",
                jobLocation: "",
                fullTime: false
            }
        });

        interface FormData {
            jobDescriptor : string;
            jobLocation: string;
            fullTime: boolean;
        }

        function onSubmit(data : FormData){
                console.log(data)
        }

        return (
            <form id='job' className={`${styles['search-bar']}`} onSubmit={handleSubmit(onSubmit)}>
                <SearchInput register={register} searchParam={"jobDescriptor"} Icon={SearchIcon} placeholder="Enter desired job..." />
                <SearchInput register={register} searchParam={"jobLocation"}  Icon={LocationIcon} placeholder="Filter by location..." />
                <div className={`flex justify-between align-center ${styles.search}`}>
                    <div className={`flex ${styles['full-time']}`}>
                        <input className={`${styles.checkbox}`} type="checkbox" {...register("fullTime")} />
                        <h4>Full-Time Only</h4>
                    </div>
                    <Button buttonType='submit' placeholderText='Search'/>
                </div>
            </form>

        )

}