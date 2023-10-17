import styles from "./css/navbar.module.css";
import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getUser, logout, } from "../Login/JS/login.js";
import { BsCart2 } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

import "./css/nav.css";

const Navbar = ({ setCloseChange, loggedUser, setLoggedUser, setUser, addToCart}) => {

    let user = getUser();
    const navigate = useNavigate();
    const location = useLocation();
   
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

    const handleOrder = (e) => {
       user? navigate("/order") : alert("You Have To Login First")
    }
    useEffect(() => {
        setLoggedUser(user);
    }, [])
    return (
        <nav className={styles.navbarContainer}>
            {location.pathname === '/order'?
            <Link to="/food" className={styles.logo}><BsArrowLeft className={styles.arrow} /></Link> :
            <Link to="/" className={styles.logo}>HOME</Link>}
            
            <div className={styles.right}>
                {user ?
                    <div className={styles.login} >
                        {user.result.admin && <Link to="/admin" className={styles.admin}>Admin</Link>}
                        {user.result.position === "waiter" && <Link to="/waiter" className={styles.admin}>Waiter</Link>}

                        <span className={styles.logoUser}>{user.result.firstName.split("")[0]}</span>
                        <span className={styles.logoutSpan} onClick={handleLogout}>Logout</span>
                        <div className={styles.cartWrapp} onClick={handleOrder}>
                            <div className={styles.countAdd}>{addToCart?.length}</div>
                            <dir className={styles.cartIconn}>
                                <BsCart2  />
                            </dir>

                            
                        </div>
                    </div> : <Link to="/login" className={styles.login}>Login/Register</Link>}

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