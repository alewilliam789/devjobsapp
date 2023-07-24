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
                    <div className={`flex justify-between align-center ${styles["jobdescription-header-company"]}`}>
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

    function JobText(){


            const requirementsLi = (typeof data != "undefined") 
            ? data.requirements.items.map((item, index)=>{
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            : (
                    <li>
                        There have been no requirements listed
                    </li>
                );
            


        return (
            <>
                <section className={`flex-column ${styles["jobdescription-text"]}`}>
                    <header className={`flex justify-between align-center`} style={{height: "87px"}}>
                        <div className={`flex-column justify-start ${styles["jobdescription-text-header"]}`}>
                            <p>{data ? data.postedAt : ""} ⋅ {data ? data.contract : ""} </p>
                            <h2>{data ? data.position : ""}</h2>
                            <h4>{data ? data.location : ""}</h4>
                        </div>
                        <Button buttonType="button" placeholderText="Apply Now" handleClick={()=>{}} />
                    </header>
                    <p>
                        {data ? data.description : ""}
                    </p>
                    <section className={`flex-column ${styles["jobdescription-text-requirements"]}`}>
                        <h3 style={{marginBottom:"28px"}}>Requirements</h3>
                        <p style={{marginBottom:"24px"}}>{data ? data.requirements.content : ""}</p>
                        <ul className="flex-column justify-start">{requirementsLi}</ul>
                    </section>  
                </section>
            </>
        )
    }



    return (
        <>
            <section className={`flex-column justify-center ${styles.jobdescription}`}>
                    <JobHeader />
                    <JobText />
            </section>
        </>
    )
}



