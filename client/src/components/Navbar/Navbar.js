import styles from "./css/navbar.module.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../Login/JS/login.js"
import "./css/nav.css";

const Navbar = ({ setCloseChange, loggedUser, setLoggedUser,setUser }) => {

    let user = getUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setLoggedUser(null);
        setUser(null);
        navigate("/")
    }
    

    const closeBtn = (e) => {
        e.currentTarget.classList.toggle("change");
        setCloseChange(e.currentTarget.classList);
        if (e.currentTarget.classList[1] === "change") {
            navigate("/floatMenu")
        } else {
            navigate(-1)
        }
    }
useEffect(()=>{
    setLoggedUser(user);
},[])
    return (
        <nav className={styles.navbarContainer}>
            <Link to="/" className={styles.logo}>Rimac</Link>
            <div className={styles.right}>
                {user?<div className={styles.login} onClick={handleLogout}>
                   <span className={styles.logoUser}>{user.result.firstName.split("")[0]}</span>
                    <span className={styles.logoutSpan}>Logout</span></div> : <Link to="/login" className={styles.login}>Login/Register</Link> }
                
                <div className={styles.navBtn} onClick={(e) => { closeBtn(e) }}>
                    <div className={`${styles.line} line_1`}></div>
                    <div className={`${styles.line} line_2`}></div>
                    <div className={`${styles.line} line_3`}></div>
                </div>
            </div>


        </nav>
    )
}

export default Navbar;