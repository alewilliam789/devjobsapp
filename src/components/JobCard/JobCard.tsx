import { Link } from 'react-router-dom';

import { useThemeContext } from '../../context/ThemeContext';

import { JobData } from '../../types';

import Icon from '../Icon/Icon';


import styles from './styles.module.css';


interface JobCardProps {
    job : JobData
}



export default function JobCard({job}: JobCardProps){

    const { theme } = useThemeContext();

    
    return (
        <>
        <div className={styles.jobcard}>
            <Icon iconURL={job.logo} iconType="card" bgColor={job.logoBackground} iconSize={{height:"max-content",width:"max-content"}} logoSize={{width:"50px", height:"50px"}} borderRad='15px' companyName={job.company}/>
            <Link to={`jobs/${job.id}`} style={{color:'inherit'}}>
            <main className={` ${styles["jobcard-body"]} ${styles[`${theme}`]}`}>
                <div className={`${styles["jobcard-text"]}`}>
                    <p>{job.postedAt} • {job.contract}</p>
                    <h3>{job.position}</h3>
                    <p>{job.company}</p>
                    <h4 className={styles["jobcard-location"]}>{job.location}</h4>
                </div>
            </main>
            </Link>
        </div>
        </>
    )
}
