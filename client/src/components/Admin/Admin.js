import styles from "./css/admin.module.css";
import { focus } from '../Login/JS/login.js';
import { addEmployee } from "../../api/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = ({ closeChange, setStaff }) => {
    closeChange?.remove("change");
    const navigate = useNavigate();
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", repeatPass: "", position: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
         addEmployee(user);
        setUser({ firstName: "", lastName: "", email: "", password: "", repeatPass: "", position: "" });
    }
    const handleFocus = (e) => { focus(e) };
    
    return (
        <div className={styles.container}>
            <div className={styles.staff}>
                <button className={styles.waiterBtn} onClick={()=>{navigate('/staff'); setStaff("waiter")}}>Waiter</button>
                <button className={styles.delivierBtn} onClick={()=>{navigate('/staff'); setStaff("deliverer")}}>Delivier</button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">

                <div className={styles.inputReg}>
                    <div className={`${styles.inputWrapp} inputWrapp changeL`} onClick={handleFocus}>
                        <label className={`${styles.label} label`} >First Name</label>
                        <input type="text" className={styles.input} autoFocus onChange={(e) => { setUser({ ...user, firstName: e.target.value }) }} autoComplete="on" value={user.firstName} />
                    </div>
                    <div className={`${styles.inputWrapp} inputWrapp`} onClick={handleFocus}>
                        <label className={`${styles.label} label`}>Last Name</label>
                        <input type="text" className={styles.input} onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }} autoComplete="on" value={user.lastName} />
                    </div>
                </div>

                <div className={`${styles.inputWrapp} inputWrapp `} onClick={handleFocus}>
                    <label className={`${styles.label} label`}>Email</label>
                    <input type="text" className={styles.input} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} autoComplete="on" value={user.email} />
                </div>
                <div className={`${styles.inputWrapp} inputWrapp`} onClick={handleFocus}>
                    <label className={`${styles.label} label`}>Password</label>
                    <input type="text" className={styles.input} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} value={user.password} />
                </div>
                <div className={styles.radioWrapper}>
                    <div className={styles.waiter}>
                        <input type="radio" className={styles.waiterInput} onChange={(e) => { setUser({ ...user, position: e.target.value }) }} value="waiter" id="waiter" name="position" />
                        <label className={styles.waiterLabel} >Waiter</label>
                    </div>
                    <div className={styles.deliverer}>
                        <input type="radio" className={styles.delivererInput} onChange={(e) => { setUser({ ...user, position: e.target.value }) }} value="deliverer" id="deliverer" name="position" />
                        <label className={styles.delivererLabel} >Deliverer</label>
                    </div>


                </div>

                <button className={styles.logRegBtn}>Add Employee</button>

            </form>
        </div>
    )
}

export default Admin;