import { useParams } from "react-router-dom";


import { useJob } from "../../hooks";
import { JobData } from "../../types";
import Icon from "../Icon/Icon";


import styles from './styles.module.css';
import Button from "../Button/Button";





export default function JobDescription(){


    const { jobId } = useParams();

    const { data } = useJob(jobId ? jobId : "");


    function JobHeader(){
        return (
            <>
                <header className={`flex justify-start align-center ${styles["jobdescription-header"]}`}>
                    <Icon iconURL={data ? data.logo : ""} iconType="description" bgColor={data ? data.logoBackground : "white"} iconSize={{width:"81px", height:"max-content"}} 
                        logoSize={{width:"140px",height:"140px"}} borderRad="0px"/>
                    <div className={`flex justify-between align-center ${styles["jobdescription-company"]}`}>
                        <div>
                            <h3>{data?.company}</h3>
                            <p>{data?.website}</p>
                        </div>
                        <Button buttonType="button" placeholderText="Company Site" size={{width:"147px",height:"48px"}} handleClick={()=>{}} />
                    </div>
                </header>
            </>
        )
    }



    return (
        <>
            <section className={`${styles.jobdescription}`}>
                    <JobHeader />
            </section>
        </>
    )
}



