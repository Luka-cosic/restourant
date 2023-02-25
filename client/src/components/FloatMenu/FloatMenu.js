import styles from "./css/floatMenu.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { handleHover1, handleMouseOut1 } from "./JS/float.js";

const FloatMenu = ()=>{
    const cont = useRef();
    const handleMouseOut = ()=>{ handleMouseOut1(cont) }
    const handleHover = (e)=>{ handleHover1(e, cont) }

    return(
        <div className={styles.container} ref={cont} onMouseOut={handleMouseOut}>
            <Link to="/aboutUs" id="slika1" className={styles.link} onMouseOver={handleHover}> <span className={styles.numbers}>01</span><h1 className="headMenu">ABOUT US</h1> </Link>
            <Link to="/food" id="slika2" onMouseOver={handleHover} onMouseOut={handleMouseOut} className={styles.link}><span className={styles.numbers}>02</span> <h1 className="headMenu">FOOD</h1> </Link>
            <Link to="/" id="slika4" onMouseOver={handleHover} onMouseOut={handleMouseOut} className={styles.link}><span className={styles.numbers}>03</span> <h1 className="headMenu">MENU 2</h1> </Link>
            <Link to="/" id="slika5" onMouseOver={handleHover} onMouseOut={handleMouseOut} className={styles.link}><span className={styles.numbers}>04</span> <h1 className="headMenu">MENU 3</h1> </Link>

        </div>
        
    )
}

export default FloatMenu;