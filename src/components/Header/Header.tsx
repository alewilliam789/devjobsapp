import styles from './styles.module.css';

import ThemeSelector from '../ThemeSelector/ThemeSelector';


import HeaderBackground from '../../assets/desktop/bg-pattern-header.svg';






export default function Header(){

    return (
        <header className={styles.header} style={{backgroundImage: `url(${HeaderBackground})`}}>  
            <section className={` flex justify-between ${styles['header-content']}`}>
                <h1 className={`${styles["header-title"]}`}>devjobs</h1>
                <ThemeSelector />
            </section>
        </header>
    )
}