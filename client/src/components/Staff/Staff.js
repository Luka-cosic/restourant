import styles from './css/staff.module.css';
import { useEffect, useState } from 'react';
import { getStaff } from "../../api/index.js";

const Staff = ({ staff }) => {
    
    const [workers, setWorkers] = useState([])
    const getStaff_1 = async (staff) => {
        const { data } = await getStaff(staff);
        setWorkers(data);
    }

    const allRows = workers.map((worker, i) => {
        return (
            <tr className={styles.row} key={i}>
                <td className={styles.td}>{i + 1}</td>
                <td className={styles.td}>{worker.firstName}</td>
                <td className={styles.td}>{worker.lastName}</td>
                <td className={styles.td}>Male</td>
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
                        <th className={styles.th}>Age</th>
                        <th className={styles.th}>Gender</th>
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