import { useState, useEffect, useLayoutEffect } from 'react';
import {useQuery} from '@tanstack/react-query';


import fetchJobs from './API';


import { JobData } from './types';








export function useJobs(){
    return useQuery<JobData[], Error>(['job'],()=>fetchJobs())
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

export function useResultCount(windowWidth : number){

    const [resultCount, setResultCount] = useState<number>(12);

    useLayoutEffect(()=>{
        setResultCount(()=>{
            if(windowWidth > 2323){
                return 10;
            }
            else{
                return 12
            }
        })
    },[windowWidth])

    return {resultCount, setResultCount}
}