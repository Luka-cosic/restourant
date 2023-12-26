import styles from "./css/sec4.module.css";

import { useRef, useEffect } from "react";
import img1 from "./images/img1.png";
import { gsapAnimate } from "./JS/gsapAnimate.js";
import "./css/sec4.css";


const Section4 = () => {

    const leftSide = useRef(null);
    
    useEffect(() => {
        gsapAnimate(leftSide)
        
    },[]);

    return (
        <div className={`${styles.section4}`} >
            <div className={`${styles.leftSide} leftSide`} ref={leftSide} >
                <h1 className={`${styles.heading} heading`}>Enterier</h1>
                <p className={`${styles.text} text`}>Renomirani sarajevski arhitekta Amir Vuk Zec, dobitnik najviših priznanja i nagrada za dizajn enterijera Hotela Termag i etno restorana Koliba, rekao je: “Pravi objekat na pravom mjestu, oslikava ambijent Jahorine i daje potpuni ugođaj. Drvo u svom punom i iskrenom izrazu. U virtuelnom vremenu, vratite se sebi i prirodi - Hotelu Termag.”</p>
            </div>
            <div className={`${styles.rightSide} rightSide`} >
                <img src={img1} className={styles.img} alt="" />
            </div> 
        </div>
    )
}

export default Section4;