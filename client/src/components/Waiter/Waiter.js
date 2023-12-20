import styles from "./css/waiter.module.css";
import { deleteCard, getBookdTables } from "../../api/index";
import { BsBoxArrowDownLeft } from "react-icons/bs";
import { useEffect } from "react";
import { io } from 'socket.io-client';
import "./css/waiter.css";


const Waiter = ({ closeChange, bookedTables, setBookedTables }) => {
    closeChange?.remove("change");
    const socket = io('https://restaurant1-1089fa3ddcde.herokuapp.com');

   
    const closeComment = (e) => {
        e.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.remove("openComment");
    }
    const openComment = (e) => {
        console.log(e.target);
        
        e.target.parentNode.parentNode.classList.add("openComment");
    }
    const handleDelete = async (e) => {
        let id = e.target.parentNode.parentNode.firstChild.innerText;
        const { data } = await deleteCard(id);
        // const socket = io('http://localhost:5000');
        if (data) {
            socket.emit('deleteTable', data);
          }
        // setBookedTables(data);
    }

    const getBookdTables_1 = async ()=>{
        let {data} = await getBookdTables();
        setBookedTables(data);
    }
    const socetIOFunc = ()=>{
        socket.on('fromServerBT', (msg) => {
            setBookedTables(msg)  
        });
        socket.on('fromServerDT', (msg) => {
            setBookedTables(msg)  
        });

        
    }
    useEffect(()=>{
        getBookdTables_1();
        socetIOFunc();
    },[])
    const allBookedTables = bookedTables.map((table, i) => {
        return (
            <div className={styles.card} key={i}>
                <div className={styles.id}>{table._id}</div>
                <div className={styles.header}> Table {table.table} in {table.time}h</div>
                <div className={styles.body}>
                    <div className={styles.name}>{table.name}</div>
                    <div className={styles.email}>{table.email}</div>
                    <div className={styles.phone}>{table.phone}</div>
                    <div className={styles.phone}> {table.date?.split("").slice(0, 10)}</div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.comment} onClick={openComment} style={table.comment? {backgroundColor: "green"} : {}} >Comment</div>
                    <div className={`${styles.commentContent} commentSection`}>
                        <div className={styles.comFooter}>
                            <div className={styles.closeBtn} onClick={closeComment} >
                                <BsBoxArrowDownLeft />
                            </div>
                            <a className={styles.link} href="https://mail.google.com/mail/u/0/#inbox?compose=new">Go To Email</a>
                        </div>
                        <div className={`${styles.comBody} comBody`}>{table.comment}</div>
                    </div>
                    <button className={styles.delete} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        )
    })
    return (
        <div className={styles.container}>
            {allBookedTables}
        </div>
    )
}

export default Waiter;