import styles from './styles.module.css';

import ThemeSelector from '../ThemeSelector/ThemeSelector';


import HeaderBackground from '../../assets/desktop/bg-pattern-header.svg';
import {ReactComponent as Logo} from '../../assets/desktop/logo.svg';






export default function Header(){

    return (
        <header className={styles.header} style={{backgroundImage: `url(${HeaderBackground})`}}>  
            <section className={` flex justify-between ${styles['header-content']}`}>
                <Logo />
                <ThemeSelector />
            </section>
        </header>
    )
}