import { useForm } from 'react-hook-form';


import { useScreenWidth } from '../../hooks';


import styles from './styles.module.css';


import SearchInput from '../SearchInput/SearchInput';
import Button from '../Button/Button';


import {ReactComponent as SearchIcon} from '../../assets/desktop/icon-search.svg';
import {ReactComponent as LocationIcon} from '../../assets/desktop/icon-location.svg';
import {ReactComponent as MobileSearchIcon} from '../../assets/mobile/icon-search-white.svg';
import {ReactComponent as FilterIcon} from '../../assets/mobile/icon-filter.svg';



export default function SearchBar(){

    const { width } = useScreenWidth();
    
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

        function SearchBarSwitcher(){

            if(width < 729){
                return (
                    <>
                        <div className={`flex align-center justify-center ${styles["searchbar-search"]}`}>
                            <FilterIcon />
                            <Button buttonType='submit' Icon={MobileSearchIcon} handleClick={undefined} placeholderText={undefined} size={{width:"45px",height:"45px"}}/>
                        </div>
                    </>
                )
            }
            return (
                <>
                    <div>
                    <SearchInput register={register} searchParam={"jobLocation"}  Icon={LocationIcon} placeholder="Filter by location..." />
                    </div>
                    <div className={`flex justify-between align-center ${styles["searchbar-search"]}`}>
                        <div className={`flex align-center ${styles['searchbar-full-time']}`}>
                            <input id="full-time" className={`${styles["searchbar-checkbox"]}`} type="checkbox" {...register("fullTime")} />
                            <label htmlFor="full-time" className={`${styles["searchbar-ft-text"]}`}>Full Time</label>
                        </div>
                        <Button buttonType='submit' placeholderText='Search' handleClick={undefined} />
                    </div>
                </>
            )
        }

        return (
            <form id='job' className={`${styles['searchbar']}`} onSubmit={handleSubmit(onSubmit)}>
                <div>
                <SearchInput register={register} searchParam={"jobDescriptor"} Icon={ (width >= 768) ? SearchIcon : null} placeholder="Enter desired job..." />
                </div>
                <SearchBarSwitcher />
            </form>

        )

}