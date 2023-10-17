import styles from './css/staff.module.css';
import { useEffect, useState } from 'react';
import { getStaff, delEmployee } from "../../api/index.js";
// import { useNavigate } from "react-router-dom";

const Staff = ({closeChange, staff }) => {
    closeChange?.remove("change");
    // const navigate = useNavigate();
    const [workers, setWorkers] = useState([])
    const getStaff_1 = async (staff) => {
        const { data } = await getStaff(staff);
        setWorkers(data);
    }
    const del = async (id)=>{
       const {data} = await delEmployee(id);
       const deleted = workers.filter((el)=>{
            return el._id !== data._id
       })
       setWorkers(deleted);
    }
    const allRows = workers.map((worker, i) => {
        // console.log(worker);
        
        return (
            <tr className={styles.row} key={i}>
                <td className={styles.td}>{i + 1}</td>
                <td className={styles.td}>{worker.firstName}</td>
                <td className={styles.td}>{worker.lastName}</td>
                <td className={styles.td}>{worker.email}</td>
                <td className={styles.td}><button className={styles.delBtn} onClick={()=>{del(worker._id)}}>Delete</button></td>

            </tr>
        )
    })
    useEffect(() => {
        getStaff_1(staff)
    }, []);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.headRow}>
                        <th className={styles.th}>#</th>
                        <th className={styles.th}>Name</th>
                        <th className={styles.th}>Last Name</th>
                        <th className={styles.th}>Email</th>
                        <th className={styles.th}>Delete</th>

                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {allRows}

                </tbody>
            </table>
        </div>
    )
}

export default Staff;