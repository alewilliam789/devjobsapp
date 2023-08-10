import { useForm } from 'react-hook-form';


import { index } from '../../algolia';
import { useScreenWidth } from '../../hooks';
import { useThemeContext } from '../../context/ThemeContext';
import { useJobContext } from '../../context/JobsContext';



import styles from './styles.module.css';


import SearchInput from '../SearchInput/SearchInput';
import Button from '../Button/Button';


import {ReactComponent as SearchIcon} from '../../assets/desktop/icon-search.svg';
import {ReactComponent as LocationIcon} from '../../assets/desktop/icon-location.svg';
import {ReactComponent as FilterIcon} from '../../assets/mobile/icon-filter.svg';
import { useState } from 'react';
import { JobData } from '../../types';





export default function SearchBar(){

    const { width } = useScreenWidth();

    const { theme } = useThemeContext();

    const { setHits } = useJobContext()

    const [hidden, setHidden] = useState(false);
    
    const {register, handleSubmit} = useForm(
        {
            defaultValues :{
                jobDescriptor : "",
                jobLocation: "",
                fullTime: false,
                partTime: false
            }
        });

        interface FormData {
            jobDescriptor: string;
            jobLocation: string;
            fullTime: boolean;
            partTime: boolean;
        }

        function onSubmit(data : FormData){
                    setHidden(false)
                    index.search<JobData>(`${data.jobDescriptor}, ${data.jobLocation}`,
                        {
                            filters: ((!data.fullTime && !data.partTime) || (data.fullTime && data.partTime)) ? '' : `fullTime:${data.fullTime}`
                        }

                    ).then((hits)=>{
                        setHits(()=> {
                            return hits.hits
                        })
                    })
        }

        function FullTimeCheckbox(){
            return (
                <>
                    <div className={`flex align-center ${styles['searchbar-full-time-container']}`}>
                        <div className={`flex align-center ${styles['searchbar-full-time']}`}>
                            <input id="full-time" className={`${theme} ${styles["searchbar-checkbox"]}`} type="checkbox" {...register("fullTime")} />
                            <label htmlFor="full-time" className={`${styles["searchbar-ft-text"]}`}>FT</label>
                        </div>
                        <div className={`flex align-center ${styles['searchbar-full-time']}`}>
                            <input id="part-time" className={`${theme} ${styles["searchbar-checkbox"]}`} type="checkbox" {...register("partTime")} />
                            <label htmlFor="part-time" className={`${styles["searchbar-ft-text"]}`}>PT</label>
                        </div>
                    </div>
                </>
            )
        }

        function SearchBarSwitcher(){


            if(width <= 762){
                return (
                    <>
                        <div className={`flex align-center justify-center ${styles["searchbar-search"]}`}>
                            <FilterIcon fill={theme =='day' ? '#6E8098' : "white"} onClick={()=>{setHidden((prevState)=>{return !prevState})}}/>
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
                {(hidden && width < 767) && (
                            <div style={{position:'absolute',top:'0px', left:'-25%', zIndex: 2, height: '100%', width: '150%', backgroundColor: "rgb(0,0,0,.5)"}}>
                                <div className='flex justify-center' style={{marginTop:"227px"}}>
                                    <div style={{overflow:"hidden", width:"327px", height: "217px", borderRadius: "6px"}}>
                                        <div className={`flex-column justify-evenly ${styles[`${theme}`]}`} style={{height: "100%", width: "100%", paddingLeft:"16px"}}>
                                            <div style={{width:"100%", marginLeft:"-15px", paddingLeft: "10px",marginTop:"-30px", borderBottom:"1px solid", borderColor:`${theme == 'day' ? '#F4F8F6' : '#6E8098'}`}}>
                                            <SearchInput register={register} searchParam={"jobLocation"}  Icon={LocationIcon} placeholder="Filter by location..."/>
                                            </div>
                                            <FullTimeCheckbox />
                                            <Button buttonType='submit' handleClick={handleSubmit(onSubmit)} placeholderText='Search' size={{width:"279px",height:"48px"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                <form className={`${styles['searchbar']} ${styles[`${theme}`]}`} onSubmit={handleSubmit(onSubmit)}>
                    <SearchInput register={register} searchParam={"jobDescriptor"} Icon={ (width >= 767) ? SearchIcon : null} placeholder={width <= 1439 ? "Filter by title..." : "Filter by title, companies, expertise..."} />
                    <SearchBarSwitcher />
                </form>
            </>
        )

}
