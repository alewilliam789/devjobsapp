import {ReactNode, createContext, useContext, useState} from 'react';


import { useJobs } from '../hooks';

import { JobData } from '../types';



interface JobsContextProps {
    hits: JobData[] | null;
    setHits : React.Dispatch<React.SetStateAction<JobData[] | null>>
}



export const JobsContext = createContext<JobsContextProps | null>(null);

type ProviderProps = {
    children: ReactNode,
}


export const JobsProvider = ({ children }: ProviderProps) => {


    const { data } = useJobs();



    const [hits,setHits] = useState<JobData[] | null>(data ? data : null);

    return <JobsContext.Provider value={{hits,setHits}}>{children}
                </JobsContext.Provider>

};

export const useJobContext = () => {
    const jobsContext = useContext(JobsContext);

    if(!jobsContext){
        throw new Error("This hook needs to be used inside a JobProvider")
    }

    return jobsContext
}
