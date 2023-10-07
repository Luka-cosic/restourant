import styles from "./css/tableG.module.css";

const TableG = ({book,setBook, table, bookedTables})=>{

    let arr = [];

    bookedTables.forEach((book, i) =>{

        if(table.id === book.table){
            arr.push(<div className={styles.booked} key={i}>ALREADY BOOKED from {book.time}h</div>)
        }  
    })
    
  if(arr.length === 0){
    arr.push(<div className={styles.free}>FREE</div>)
    
  }
    
    const handleClick = (e) => {
        setBook({ ...book, table: table.id });
    }

    const showReservation = (e) => {
        e.currentTarget.firstChild.style.display = 'block';
    }

    const closeReservation = (e) => {
        e.currentTarget.firstChild.style.display = 'none';
    }
    return(
        <div className={styles.ta} onMouseOver={showReservation} onClick={handleClick} onMouseLeave={closeReservation} id={table.id}>
            <div className={styles.reservation} >
                <div className={styles.date}>{table.date()}</div>
                <div className={styles.br}>Table nr.{table.id} ({table.brOfSe}) places </div>
                <div className={styles.redGreen}>
                    {arr}
                </div>
            </div>
            
        </div>
    )
}

export default TableG;