import styles from "./css/waiter.module.css";
import { deleteCard } from "../../api/index";
const Waiter = ({ closeChange, bookedTables, setBookedTables }) => {
    closeChange?.remove("change");
    const handleDelete = async (e) => {
        let id = e.target.parentNode.parentNode.firstChild.innerText
        const {data} = await deleteCard(id);
        setBookedTables(data)
        

    }
    const allBookedTables = bookedTables.map((table, i) => {
        return (
            <div className={styles.card} key={i}>
                <div className={styles.id}>{table._id}</div>
                <div className={styles.header}> Table {table.table} in {table.time}h</div>
                <div className={styles.body}>
                    <div className={styles.name}>{table.name}</div>
                    <div className={styles.email}>{table.email}</div>
                    <div className={styles.phone}>{table.phone}</div>
                    <div className={styles.phone}> {table.date?.split("").slice(0,10)}</div>

                </div>
                <div className={styles.footer}>
                    <div className={styles.comment}>comment</div>
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