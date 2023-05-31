import styles from "./css/section2.module.css";
import { useRef, useEffect, useLayoutEffect  } from "react";
import { addClass } from "./JS/sec2.js";
import "./css/sec2.css";

const Section2 = () => {
    const sec2Ref = useRef(null);
    const handleScroll = (e)=>{ addClass(e, sec2Ref) };
    useLayoutEffect (() => {
        window.addEventListener("scroll", handleScroll)
    },[]);

    return (
        <div className={styles.section_2} ref={sec2Ref}>
            <h1 className={`${styles.heading} heading`}>HOTEL TERMAG - AUTENTIČAN I MODERAN</h1>
            <p className={`${styles.text} text`}>Termag Hotel Jahorina je moderan hotel sa 4 zvjezdice sa bogatom ponudom različitih sadržaja u toku cijele godine. Zauzima centralno mjesto u ski centru Jahorina. Nalazi se na 1550 m nadmorske visine, neposredno uz stazu i žičare. Raspolaže sa 71 komfornom sobom, 21 luksuzno opremljenim apartmanom i jednim predsjedničkim apartmanom. Kompletan enterijer i namještaj u hotelu je originalno dizajniran i izrađen od punog drveta.</p>
            <div className={`${styles.btnWrapp} btnWrapp`}>
                <div className={styles.btnEfect}></div>
                <button className={styles.viewBtn}>View Images</button>
            </div>

        </div>
    )
}

export default Section2;