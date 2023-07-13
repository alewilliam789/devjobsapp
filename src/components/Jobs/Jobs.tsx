import JobCard from "../JobCard/JobCard";
import SearchBar from "../SearchBar/SearchBar";

import styles from './styles.module.css'





export default function Jobs(){
    return (
        <>
            <section className={`flex-column justify-center`}>
                <SearchBar />
            </section>
        </>
    )
}