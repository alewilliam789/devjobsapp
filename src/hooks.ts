import {useQuery} from '@tanstack/react-query';
import { JobData } from './types';
import fetchJobs from './API';






export default function useJobs(){
    return useQuery<JobData[], Error>(['job'],()=>fetchJobs())
}