import { useQueryClient } from "@tanstack/react-query";


import JobCard from "../JobCard/JobCard";
import SearchBar from "../SearchBar/SearchBar";


import { useJobs, useResultCount } from "../../hooks";
import { useJobContext } from "../../context/JobsContext";

import { JobData } from "../../types";


import styles from './styles.module.css';
import Button from '../Button/Button';




function isUndefined(data : JobData[] | undefined, hits : JobData[] | null){
    if(typeof data != "undefined" && hits == null){
        return data
    }
    else if(hits != null){
        if(hits.length > 0)
            return hits
    }
    return []
}

export default function Jobs(){

    const { data } = useJobs();

    const { hits } = useJobContext()

    const queryClient = useQueryClient()

    const {resultCount, setResultCount} = useResultCount()

    
    const definedData = isUndefined(data, hits);

    
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
                { (resultCount !== definedData.length  && (hits == null || hits.length > resultCount)) &&
                (<div style={{alignSelf:"center"}}>
                    <Button buttonType='button' placeholderText='Load More' handleClick={()=>{setResultCount(definedData.length)}} />
                </div>)}
            </section>
        </>
    )
}