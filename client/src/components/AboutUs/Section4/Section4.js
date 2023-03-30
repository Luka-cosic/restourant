import styles from "./css/sec4.module.css";

import { useRef, useEffect } from "react";
import img1 from "./images/img1.png";
import "./css/sec4.css";
import { gsapAnimate } from "./JS/gsapAnimate";

const Section4 = ()=>{
    
    const sec4Ref = useRef(null);
    const rightSide = useRef(null);
    const leftSide = useRef(null);

    useEffect(()=>{
        gsapAnimate(sec4Ref,leftSide, rightSide); 
    },[]);

    return(
        <div className={`${styles.section4}`} ref={sec4Ref}>
            <div className={`${styles.leftSide} leftSide`} ref={leftSide} >
                <h1 className={styles.heading}>Enterier</h1>
                <p className={styles.text}>Renomirani sarajevski arhitekta Amir Vuk Zec, dobitnik najviših priznanja i nagrada za dizajn enterijera Hotela Termag i etno restorana Koliba, rekao je: “Pravi objekat na pravom mjestu, oslikava ambijent Jahorine i daje potpuni ugođaj. Drvo u svom punom i iskrenom izrazu. U virtuelnom vremenu, vratite se sebi i prirodi - Hotelu Termag.”</p>
            </div>
            <div className={`${styles.rightSide} rightSide`} ref={rightSide} >
                <img src={img1} className={styles.img} alt="" />
            </div>
        </div>
    )
}

export default Section4;