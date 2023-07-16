import {useQuery} from '@tanstack/react-query';
import { JobData } from './types';
import fetchJobs from './API';






export function useJobs(){
    return useQuery<JobData[], Error>(['job'],()=>fetchJobs())
}