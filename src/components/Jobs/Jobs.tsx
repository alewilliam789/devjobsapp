import { useEffect } from 'react';
import { useQueryClient } from "@tanstack/react-query";


import JobCard from "../JobCard/JobCard";
import SearchBar from "../SearchBar/SearchBar";


import useJobs from "../../hooks";

import { JobData } from "../../types";


import styles from './styles.module.css';




function isUndefined(data : JobData[] | undefined){
    if(typeof data != "undefined"){
        return data
    }
    return []
};

export default function Jobs(){

    const { data } = useJobs();

    const queryClient = useQueryClient()

    useEffect(()=>{
        console.log(innerHeight)
    },[innerHeight])


    const definedData = isUndefined(data);

    
    const jobList = definedData.map((job)=> {
        queryClient.setQueryData(['job',{id: job.id}], job)
            return(
                <li className={styles['jobs-card']} key={job.id}>
                    <JobCard job={job} />
                </li>
            )
    })


    return (
        <>
            <section className={`flex-column justify-center ${styles.jobs}`}>
                <SearchBar />
                <ul className={`${styles['jobs-cardlist']}`}>
                    {jobList}
                </ul>
            </section>
        </>
    )
}