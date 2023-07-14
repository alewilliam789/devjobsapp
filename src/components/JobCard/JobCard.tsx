import styles from './styles.module.css';

import Icon from '../Icon/Icon';
import { JobData } from '../../types';

interface JobCardProps {
    job : JobData
}



export default function JobCard({job}: JobCardProps){
    return (
        <>
        <div id="jobcard" className={styles.jobcard}>
            <Icon iconURL={job.logo} bgColor={job.logoBackground}/>
            <main className={` ${styles["jobcard-body"]}`}>
                <div className={`${styles["jobcard-text"]}`}>
                    <p>{job.postedAt} • {job.contract}</p>
                    <h3>{job.position}</h3>
                    <p>{job.company}</p>
                    <h4 className={styles["jobcard-location"]}>{job.location}</h4>
                </div>
            </main>
        </div>
        </>
    )
}