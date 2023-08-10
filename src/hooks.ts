import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';


import { fetchJob, fetchJobs } from './API';


import { JobData } from './types';








export function useJobs(){
    return useQuery<JobData[], Error>(['job'],()=>fetchJobs())
}

export function useJob(jobId : string){
        return useQuery<JobData, Error>(['job',{id:jobId}],()=>fetchJob(jobId))
}

export function useScreenWidth(){
    function getWindowSize() {
        const { innerWidth: width, innerHeight: height} = window;
        return {
          width,
          height
        };
      }
      
    const [windowSize, setWindowSize] = useState(getWindowSize());
    
    useEffect(() => {
        function handleResize() {
            setWindowSize(getWindowSize());
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return windowSize
}

export function useScreenYOffset(){
    function getWindowYOffset(){
        const {scrollY : yOffset } = window;
        return yOffset
    }

    const [windowY, setWindowY] = useState(getWindowYOffset());

    useEffect(()=>{

        function handleScroll() {
            setWindowY(getWindowYOffset());
        }

        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    return windowY
}

export function useResultCount(){

    const [resultCount, setResultCount] = useState<number>(12);

    return {resultCount, setResultCount}
}