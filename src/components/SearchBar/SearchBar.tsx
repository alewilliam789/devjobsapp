import { useForm } from 'react-hook-form';


import { useScreenWidth } from '../../hooks';


import styles from './styles.module.css';


import SearchInput from '../SearchInput/SearchInput';
import Button from '../Button/Button';


import {ReactComponent as SearchIcon} from '../../assets/desktop/icon-search.svg';
import {ReactComponent as LocationIcon} from '../../assets/desktop/icon-location.svg';
import {ReactComponent as FilterIcon} from '../../assets/mobile/icon-filter.svg';
import { useState } from 'react';




export default function SearchBar(){

    const { width } = useScreenWidth();

    const [hidden, setHidden] = useState(true);
    
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
                setHidden(false)
                console.log(data)
        }

        function FullTimeCheckbox(){
            return (
                <>
                    <div className={`flex align-center ${styles['searchbar-full-time']}`}>
                        <input id="full-time" className={`${styles["searchbar-checkbox"]}`} type="checkbox" {...register("fullTime")} />
                        <label htmlFor="full-time" className={`${styles["searchbar-ft-text"]}`}>Full Time</label>
                    </div>
                </>
            )
        }

        function SearchBarSwitcher(){


            if(width <= 762){
                return (
                    <>
                        <div className={`flex align-center justify-center ${styles["searchbar-search"]}`}>
                            <FilterIcon fill='#6E8098' onClick={()=>{setHidden((prevState)=>{return !prevState})}}/>
                            <Button buttonType='submit' handleClick={undefined} placeholderText={undefined} size={{width:"45px",height:"45px"}}>
                                    <SearchIcon fill='#FFFFFF'/>
                            </Button>
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
                        <FullTimeCheckbox />
                        <Button buttonType='submit' placeholderText='Search' handleClick={undefined} />
                    </div>
                </>
            )
        }

        return (
            <>
                {(hidden && width < 762) && (
                            <div style={{position:'absolute',top:'0px', left:'-25%', zIndex: 2, height: '100%', width: '150%', backdropFilter:"blur(2px) brightness(60%)"}}>
                                <div className='flex justify-center' style={{marginTop:"227px"}}>
                                    <div style={{overflow:"hidden", width:"327px", height: "217px", backgroundColor:'white', borderRadius: "6px"}}>
                                        <div className="flex-column justify-evenly" style={{height: "100%", width: "100%", paddingLeft:"16px"}}>
                                            <div style={{width:"100%", marginLeft:"-15px", paddingLeft: "10px",marginTop:"-30px", borderBottom:"1px solid"}}>
                                            <SearchInput register={register} searchParam={"jobLocation"}  Icon={LocationIcon} placeholder="Filter by location..." />
                                            </div>
                                            <FullTimeCheckbox />
                                            <Button buttonType='submit' handleClick={handleSubmit(onSubmit)} placeholderText='Search' size={{width:"279px",height:"48px"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                <form id='job' className={`${styles['searchbar']}`} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <SearchInput register={register} searchParam={"jobDescriptor"} Icon={ (width < 762) ? SearchIcon : null} placeholder="Enter desired job..." />
                    </div>
                    <SearchBarSwitcher />
                </form>
            </>
        )

}