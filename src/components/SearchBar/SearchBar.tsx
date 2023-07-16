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
            <form id='job' className={`${styles['searchbar']}`} onSubmit={handleSubmit(onSubmit)}>
                <div>
                <SearchInput register={register} searchParam={"jobDescriptor"} Icon={SearchIcon} placeholder="Enter desired job..." />
                </div>
                <div>
                <SearchInput register={register} searchParam={"jobLocation"}  Icon={LocationIcon} placeholder="Filter by location..." />
                </div>
                <div className={`flex justify-between align-center ${styles["searchbar-search"]}`}>
                    <div className={`flex align-center ${styles['searchbar-full-time']}`}>
                        <input id="full-time" className={`${styles["searchbar-checkbox"]}`} type="checkbox" {...register("fullTime")} />
                        <label htmlFor="full-time" className={`${styles["searchbar-ft-text"]}`}>Full Time</label>
                    </div>
                    <Button buttonType='submit' placeholderText='Search' handleClick={undefined}/>
                </div>
            </form>

        )

}