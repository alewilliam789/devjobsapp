import styles from './styles.module.css';

import Icon from '../Icon/Icon';

interface JobCardProps {
    postedAt : string,
    contract : string,
    position : string,
    company : string,
    location : string,
    iconColor : string,
    icon : string
}



export default function JobCard({postedAt, contract, position, company, location, icon, iconColor}: JobCardProps){
    return (
        <>
        <div className={styles.jobcard}>
            <Icon iconURL={icon} bgColor={iconColor}/>
            <main className={` ${styles["jobcard-body"]}`}>
                <div className={`${styles["jobcard-text"]}`}>
                    <p>{postedAt} • {contract}</p>
                    <h3>{position}</h3>
                    <p>{company}</p>
                    <h4 className={styles["jobcard-location"]}>{location}</h4>
                </div>
            </main>
        </div>
        </>
    )
}