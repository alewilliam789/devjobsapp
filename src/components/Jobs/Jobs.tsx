import { useLayoutEffect, useState } from 'react';
import { useQueryClient } from "@tanstack/react-query";


import JobCard from "../JobCard/JobCard";
import SearchBar from "../SearchBar/SearchBar";


import { useJobs } from "../../hooks";

import { JobData } from "../../types";


import styles from './styles.module.css';
import Button from '../Button/Button';




function isUndefined(data : JobData[] | undefined){
    if(typeof data != "undefined"){
        return data
    }
    return []
};

export default function Jobs(){

    const { data } = useJobs();

    const queryClient = useQueryClient()

    


    const definedData = isUndefined(data);

    const [resultCount, setResultCount] = useState<number>(12);

    useLayoutEffect(()=>{
        setResultCount((prevState)=>{
            if(window.innerWidth > 2323){
                return 10;
            }
            else{
                return prevState
            }
        })
    },[window.innerWidth])

    

    
    const jobList = definedData.map((job, index)=> {
        queryClient.setQueryData(['job',{id: job.id}], job)
            if(index <= resultCount-1){
                return(
                    <li className={styles['jobs-card']} key={job.id}>
                        <JobCard job={job} />
                    </li>
                )
            }
    })


    return (
        <>
            <section className={`flex-column justify-center ${styles.jobs}`}>
                <SearchBar />
                <ul className={`${styles['jobs-cardlist']}`}>
                    {jobList}
                </ul>
                { resultCount !== definedData.length &&
                (<div style={{alignSelf:"center"}}>
                    <Button buttonType='button' placeholderText='Load More' handleClick={()=>{setResultCount(definedData.length)}} />
                </div>)}
            </section>
        </>
    )
}