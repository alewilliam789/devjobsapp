import { useQueryClient } from "@tanstack/react-query";


import JobCard from "../JobCard/JobCard";
import SearchBar from "../SearchBar/SearchBar";


import { useJobs, useScreenWidth, useResultCount } from "../../hooks";

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

    const width = useScreenWidth();

    const {resultCount, setResultCount} = useResultCount(width.width)

    
    const definedData = isUndefined(data);

    
    const jobList = definedData.map((job, index)=> {
        queryClient.setQueryData(['job',{id: job.id}], job)
            if(index <= resultCount-1){
                return(
                    <li key={job.id} className={styles['jobs-card']}>
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