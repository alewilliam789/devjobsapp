import { useEffect } from "react";
import { useParams } from "react-router-dom";


import { useJob, useScreenWidth, useScreenYOffset } from "../../hooks";
import { useThemeContext } from "../../context/ThemeContext";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";


import styles from './styles.module.css';





export default function JobDescription(){


    const { jobId } = useParams();

    const { data } = useJob(jobId ? jobId : "");

    const windowY = useScreenYOffset();

    const { width }  = useScreenWidth();

    const { theme } = useThemeContext();

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    function JobHeader(){
        return (
            <>
                <header className={`${width <= 767 ? "flex-column justify-center":"flex justify-start"} align-center ${styles["jobdescription-header"]} ${styles[`${theme}`]}`} style={{height:`${width<=767 ? "205px" : "140px"}`, overflow:`${width<=767 ? "none" : "hidden"}`}}>
                    <Icon iconURL={data ? data.logo : ""} iconType={`${width<=767 ? "description-mobile" : "description"}`} bgColor={data ? data.logoBackground : "white"} iconSize={width <=767 ? {width:"max-content", height: "max-content" }: {width:"81px", height:"max-content"}} 
                        logoSize={width<=767 ? {width:"50px",height:"50px"} : {width:"140px",height:"140px"}} borderRad={width<=767 ? "15px":"0px"}/>
                    <div className={`${width <= 767 ? "flex-column justify-center":"flex justify-between"} align-center wrap ${styles["jobdescription-header-company"]}`}>
                        <div>
                            <h3>{data?.company}</h3>
                            <p>{data?.website}</p>
                        </div>
                        <Button buttonType="button" buttonStyles="button-2" placeholderText="Company Site" size={{width:"147px",height:"48px"}} handleClick={()=>{}} />
                    </div>
                </header>
            </>
        )
    }

    interface CustomLiProps {
        index: number;
        bullet?: string;
        item: string;
    }


    function CustomLi ({bullet, item}: CustomLiProps) {
        return(
            <li className="flex align-start"><div className={bullet ? styles["jobdescription-li-number"] : styles["jobdescription-li-bullet"]}>{bullet ? bullet: null}</div>{item}</li>
        )
    }


    interface liListProps {
        firstId : "requirements" | "role",
    }

    function liList ({ firstId } : liListProps){
        const requirementsLi = (typeof data != "undefined") 
            ? data[`${firstId}`]["items"].map((item, index)=>{
                return (

                    <CustomLi key={index} index={index} item={item} bullet={firstId == "requirements" ? undefined: `${index+1}`}/>
                )
            })
        : (
                <li>
                    There have been no requirements listed
                </li>
            );
        
        return requirementsLi
    }

    function JobMain(){
    
        return (
            <>
                <main className={`flex-column ${styles["jobdescription-main"]} ${styles[`${theme}`]}`}>
                    <header className={`flex justify-between align-center wrap`}>
                        <div className={`flex-column justify-start ${styles["jobdescription-main-header"]} ${styles[`${theme}`]}`}>
                            <p>{data ? data.postedAt : ""} ⋅ {data ? data.contract : ""} </p>
                            {width >= 767 ? <h2>{data ? data.position : ""}</h2> : <h3>{data ? data.position : ""}</h3>}
                            <h4 className="location-text">{data ? data.location : ""}</h4>
                        </div>
                        <Button buttonType="button" placeholderText="Apply Now" size={width>=767 ? undefined : {width:"279px",height:"48px"}} handleClick={()=>{}}/>
                    </header>
                    <p>
                        {data ? data.description : ""}
                    </p>
                    <section className={`flex-column ${styles["jobdescription-main-requirements"]}`}>
                        <h3 style={{marginBottom:"28px"}}>Requirements</h3>
                        <p style={{marginBottom:"24px"}}>{data ? data.requirements.content : ""}</p>
                        <ul className={`flex-column justify-start ${styles[`${theme}`]}`}>{liList({firstId:"requirements"})}</ul>
                    </section>
                    <section>
                        <h3 style={{marginBottom:"23px"}}>What You Will Do</h3>
                        <p style={{marginBottom:"24px"}}>{data ? data.role.content : ""}</p>
                        <ol className={`flex-column justify-start ${styles[`${theme}`]}`}>{liList({firstId:"role"})}</ol>
                    </section>
                </main>
            </>
        )
    }

    function JobFooter(){

        return (
            <>
            <footer className={` flex justify-center ${styles[`jobdescription-footer`]} ${styles[`${theme}`]}`}>
                <div className={` flex ${width>= 767 ? "justify-between" : "justify-center"} align-center ${styles["jobdescription-footer-content"]}`}>
                    { width >= 767 ? <div className={`flex-column ${styles["jobdescription-footer-content-text"]}`}>
                        <h3 style={{marginTop: "0px", marginBottom: "0px"}}>{data ? data.position : ""}</h3>
                        <p>{data ? data.company : ""}</p>
                    </div> : null}
                    <Button buttonType="button" placeholderText="Apply Now" size={width>=767 ? undefined : {width:"327px",height:"48px"}} handleClick={()=>{}} />
                </div>
            </footer>
            </>
        )
    }



    return (
        <>
            <section className={`flex-column justify-center ${styles.jobdescription}`}>
                    <JobHeader />
                    <JobMain />
                    {windowY >=414 ? <JobFooter />: null}
            </section>
        </>
    )
}



