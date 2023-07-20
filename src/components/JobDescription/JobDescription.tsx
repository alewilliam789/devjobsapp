import { useParams } from "react-router-dom";


import { useJob } from "../../hooks";
import { JobData } from "../../types";
import Icon from "../Icon/Icon";


import styles from './styles.module.css';





export default function JobDescription(){


    const { jobId } = useParams();

    const { data } = useJob(jobId ? jobId : "");


    function JobHeader(){
        return (
            <>
                <div className={` flex ${styles.jobdescription}`}>
                <header className={`flex justify-start align-center ${styles["jobdescription-header"]}`}>
                    <Icon iconURL={data ? data.logo : ""} iconType="description" bgColor={data ? data.logoBackground : "white"} iconSize={{width:"81px", height:"max-content"}} 
                        logoSize={{width:"140px",height:"140px"}} borderRad="0px"/>
                </header>
                </div>
            </>
        )
    }



    return (
        <>
            <section>
                <JobHeader />
            </section>
        </>
    )
}



