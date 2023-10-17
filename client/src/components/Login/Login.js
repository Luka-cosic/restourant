import styles from "./css/login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import { focus, saveUser } from './JS/login.js';
import { signUp, signIn } from "../../api/index";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


const Login = ({ closeChange, setLoggedUser, setBookedTables }) => {
    closeChange?.remove("change");
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false)
    const [isLoged, serIsLoged] = useState(false);
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", repeatPass: "" });
    const handleFocus = (e) => { focus(e) };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoged) {
            const { data } = await signUp(user);
            saveUser(data);
            setLoggedUser(data);
            navigate("/");
        } else {
            const { data } = await signIn(user);
            saveUser(data);
            setLoggedUser(data);
            if (data.result.position === "waiter") {
                setBookedTables(data.booked);
                navigate("/waiter");
                return
            }

            navigate("/");

        }
        setUser({ firstName: "", lastName: "", email: "", password: "", repeatPass: "" })

    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">
                {isLoged ? <h1 className={styles.heading}>Register</h1> : <h1 className={styles.heading}>Login</h1>}
                {isLoged && (
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
                )}
                <div className={`${styles.inputWrapp} inputWrapp ${!isLoged && "changeL"}`} onClick={handleFocus}>
                    <label className={`${styles.label} label`}>Email</label>
                    <input id="email" type="text" className={styles.input} autoFocus={!isLoged} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} autoComplete="true" value={user.email} />
                </div>
                <div className={`${styles.inputWrapp} inputWrapp`} onClick={handleFocus}>
                    <label className={`${styles.label} label`}>Password</label>
                    <input type={isVisible ? "text" : "password"} className={styles.input} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} value={user.password} />
                    <div onClick={() => { setIsVisible(!isVisible) }} className={styles.icon}>{isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</div>
                </div>
                <div className={`${styles.inputWrapp} inputWrapp`} onClick={handleFocus}>
                    <label className={`${styles.label} label`}>Repeat Password</label>
                    <input type={isVisible ? "text" : "password"} className={styles.input} onChange={(e) => { setUser({ ...user, repeatPass: e.target.value }) }} value={user.repeatPass} />
                    <div onClick={() => { setIsVisible(!isVisible) }} className={styles.icon}>{isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</div>
                </div>
                <button className={styles.logRegBtn}>{isLoged ? "Register" : "Login"}</button>
                <h4 className={styles.logReg} onClick={() => { serIsLoged(!isLoged); setUser({ firstName: "", lastName: "", email: "", password: "", repeatPass: "" }) }}>{isLoged ? "Go To Login" : "Go To Register"}</h4>
            </form>
        </div>
    )
}

export default Login;