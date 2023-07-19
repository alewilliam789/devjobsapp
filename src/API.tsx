import data from './data.json';

import { JobData } from './types';



export async function fetchJobs() : Promise<JobData[]> {
    return data;
}

export async function fetchJob(id: string) : Promise<JobData>{
    return data[Number(id)-1]
}