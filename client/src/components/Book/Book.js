import styles from './css/book.module.css'
import img1 from "./images/osnova3.png";
import img2 from "./images/osnova4.png";
import { useRef, useState, useEffect } from "react";
import { bookTable, getBookdTables } from "../../api/index.js";
import { entrance, ground } from './JS/allTables.js';
import Table from "./Table/Table.js";
import TableG from "./TableG/TableG.js";
import "./css/book.css";


const Book = ({ closeChange }) => {

    closeChange?.remove("change");
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    
    const [entrance_X, setEntrance_X ] = useState(true)
    const [ book, setBook] = useState({ date: "", time: "", table: "", persons: "", name: "", phone: "", email: "", comment: "" });
    const [bookedTables, setBookedTables] = useState([]);

    const handleBook = ()=>{
        bookTable(book)
    }
    const getAll = async () => {
        let { data } = await getBookdTables();
        setBookedTables(data);

    }
    
    const changePicture = (bool) => {
        const tables = document.querySelectorAll(".book_ta__apOzL");

        if (bool) {
            img1Ref.current.style.display = "block";
            img2Ref.current.style.display = "none";
            tables.forEach((el) => { el.style.display = "none"; })

        } else {
            img1Ref.current.style.display = "none";
            img2Ref.current.style.display = "block";
            tables.forEach((el) => { el.style.display = "block"; })
        }
    }

   
    const allTables = entrance.map((table)=>{
        
        return <Table table={table} book={book} setBook={setBook} bookedTables={bookedTables} key={table.id} />
    })
     
        
    const allTablesG = ground.map((table)=>{
        return <TableG table={table} book={book} setBook={setBook} bookedTables={bookedTables} key={table.id} />
    })

    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <h1 className={styles.heading}>Please fill in the reservation form</h1>
                <form className={styles.form}>
                    <div className={styles.col1}>
                        <div className={styles.row1}>
                            <input className={styles.inpHalf} type="date" onChange={(e) => { setBook({ ...book, date: e.target.value }) }} placeholder="Reservation date" />
                            <input className={styles.inpHalf} type="number" onChange={(e) => { setBook({ ...book, time: e.target.value }) }} placeholder="Time (HH:MM)" />
                        </div>
                        <div className={styles.tableIn}>
                            <input id={styles.pavle} className={styles.input} type="text" onChange={(e) => { setBook({ ...book, table: e.target.value }) }} value={book.table} placeholder="Booked tables" readOnly />
                        </div>
                        <input className={styles.input} type="text" onChange={(e) => { setBook({ ...book, persons: e.target.value }) }} placeholder="Nr. of persons" />

                    </div>
                    <div className={styles.col1}>
                        <input className={styles.input} type="text" onChange={(e) => { setBook({ ...book, name: e.target.value }) }} placeholder="Name" />
                        <input className={styles.input} type="text" onChange={(e) => { setBook({ ...book, phone: e.target.value }) }} placeholder="Phone" />
                        <input className={styles.input} type="text" onChange={(e) => { setBook({ ...book, email: e.target.value }) }} placeholder="Email" />

                    </div>
                    <div className={styles.col1}>
                        <textarea className={styles.textarea} onChange={(e) => { setBook({ ...book, comment: e.target.value }) }} placeholder="Comment" cols="30" rows="10"></textarea>
                    </div>
                </form>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgHolder}>
                        <div className={styles.imgDiv}>
                            <div className={styles.tables}>

                                { entrance_X && allTables }

                                <img className={styles.img1} src={img2} ref={img1Ref} alt="" />
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.tables}>

                                { !entrance_X && allTablesG}

                                <img className={styles.img2} src={img1} ref={img2Ref} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <button className={styles.baseBtn2} onClick={() => { changePicture(false); setEntrance_X(true) }}>Entrance</button>
                    <button className={styles.baseBtn1} onClick={() => { changePicture(true); setEntrance_X(false) }} >Ground Floor</button>
                    <button className={styles.bookBtn} onClick={handleBook} >Book Table</button>

                </div>
            </div>
        </div>
    )
}

export default Book;