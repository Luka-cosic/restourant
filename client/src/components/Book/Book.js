import styles from './css/book.module.css'
import img1 from "./images/osnova3.png";
import img2 from "./images/osnova4.png";
import { useRef, useState, useEffect } from "react";
import { bookTable, getBookdTables } from "../../api/index.js";
import { entrance, ground } from './JS/allTables.js';
import Table from "./Table/Table.js";
import TableG from "./TableG/TableG.js";
import { io } from 'socket.io-client';



const Book = ({ closeChange, bookedTables, setBookedTables }) => {

    closeChange?.remove("change");
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);

    const [entrance_X, setEntrance_X] = useState(true)
    const [book, setBook] = useState({ date: "", time: "", table: "", persons: "", name: "", phone: "", email: "", comment: "" });
    const [showAlert, setShowAlert] = useState(false)

    const socetIOFunc = (data) => {
        const socket = io('https://restaurant1-1089fa3ddcde.herokuapp.com/');

        if (data) {
            socket.emit('bookTable', data);
        }
    }

    const handleBook = async () => {
        const { data } = await bookTable(book);
        socetIOFunc(data);
        setBook({ date: "", time: "", table: "", persons: "", name: "", phone: "", email: "", comment: "" });
        if (data) {
            setShowAlert(true);
            setTimeout(() => { setShowAlert(false) }, 4000);
        }
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


    const allTables = entrance.map((table) => {

        return <Table table={table} book={book} setBook={setBook} bookedTables={bookedTables} key={table.id} />
    })


    const allTablesG = ground.map((table) => {
        return <TableG table={table} book={book} setBook={setBook} bookedTables={bookedTables} key={table.id} />
    })

    useEffect(() => {

        getAll();
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <h1 className={styles.heading}>Please fill in the reservation form</h1>
                <form className={styles.form}>
                    <div className={styles.col1}>
                        <div className={styles.row1}>
                            <input className={styles.inpHalf} type="date" onChange={(e) => { setBook({ ...book, date: e.target.value }) }} value={book.date} placeholder="Reservation date" required />
                            <input className={styles.inpHalf} type="number" onChange={(e) => { setBook({ ...book, time: e.target.value }) }} value={book.time} placeholder="Time (HH:MM)" required />
                        </div>
                        <div className={styles.tableIn}>
                            <input id={styles.pavle} className={styles.input} type="text" onChange={(e) => { setBook({ ...book, table: e.target.value }) }} value={book.table} placeholder="Booked tables" readOnly required />
                        </div>
                        <input className={styles.input} type="text" onChange={(e) => { setBook({ ...book, persons: e.target.value }) }} value={book.persons} placeholder="Nr. of persons" />

                    </div>
                    <div className={styles.col1}>
                        <input className={styles.input} type="text" onChange={(e) => { setBook({ ...book, name: e.target.value }) }} value={book.name} placeholder="Name" required />
                        <input className={styles.input} type="text" onChange={(e) => { setBook({ ...book, phone: e.target.value }) }} value={book.phone} placeholder="Phone" required />
                        <input className={styles.input} type="text" onChange={(e) => { setBook({ ...book, email: e.target.value }) }} value={book.email} placeholder="Email" required />

                    </div>
                    <div className={styles.col1}>
                        <textarea className={styles.textarea} onChange={(e) => { setBook({ ...book, comment: e.target.value }) }} value={book.comment} placeholder="Comment" cols="30" rows="10"></textarea>
                    </div>
                </form>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgHolder}>
                        <div className={styles.imgDiv}>
                            <div className={styles.tables}>

                                {entrance_X && allTables}

                                <img className={styles.img1} src={img2} ref={img1Ref} alt="" />
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.tables}>

                                {!entrance_X && allTablesG}

                                <img className={styles.img2} src={img1} ref={img2Ref} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {showAlert &&
                    <div className={styles.alert}>
                        <p>You have successfully reserved a table</p>
                    </div>
                }

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