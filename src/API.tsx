import data from './data.json';

import { JobData } from './types';



export default async function fetchJobs() : Promise<JobData[]> {
    return data;
}