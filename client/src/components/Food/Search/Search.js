import styles from './css/search.module.css';

const Search = ({ setAll, copyAllMeals, setAllMeals, all }) => {

    const handleSearch = (e) => {

        setAll(false);
        let rez = copyAllMeals.filter((el) => {
            return el.type === e.target.innerText
        });
        setAllMeals(rez);
    }
    return (
        <div className={styles.searchButtons}>
            <button className={styles.srcBtn} onClick={() => { setAllMeals(copyAllMeals); setAll(false) }}>All</button>
            <button className={styles.srcBtn} onClick={handleSearch}>Pizza</button>
            <button className={styles.srcBtn} onClick={handleSearch}>Pasta</button>
            <button className={styles.srcBtn} onClick={handleSearch}>Soup</button>
            <button className={styles.srcBtn} onClick={handleSearch}>Cakes</button>
            <button className={styles.paginationBtn} onClick={()=>{setAll(true)}}>Pagination</button>

        </div>
    )
}

export default Search;