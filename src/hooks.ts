import { useState, useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';


import fetchJobs from './API';


import { JobData } from './types';








export function useJobs(){
    return useQuery<JobData[], Error>(['job'],()=>fetchJobs())
}

export function useScreenWidth(){
    function getWindowWidth() {
        const { innerWidth: width} = window;
        return {
          width
        };
      }
      
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
    
    useEffect(() => {
        function handleResize() {
        setWindowWidth(getWindowWidth());
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return windowWidth;
}