import SearchBar from "../SearchBar/SearchBar";

import styles from './styles.module.css'




export default function Jobs(){
    return (
        <>
            <main className={`flex-column justify-center ${styles.jobs}`}>
            <SearchBar />
    </main>
        </>
    )
}