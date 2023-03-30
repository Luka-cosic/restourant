import styles from "./css/sec6.module.css";
import { useRef, useEffect } from "react";
import img1 from "./images/img1.png";
import "./css/sec6.css";
import { gsapAnimate } from "./JS/gsapAnimate";

const Section6 = ()=>{
   
    const sec6Ref = useRef(null);
    const leftSide = useRef(null);
    const rightSide = useRef(null);


    useEffect(()=>{
        
        gsapAnimate(sec6Ref,leftSide, rightSide); 
    },[]);

    return(
        <div className={`${styles.section6}`} ref={sec6Ref}>
            <div className={`${styles.leftSide} leftSide`} ref={leftSide} >
                <h1 className={styles.heading}>Usluge</h1>
                <p className={styles.text}>Room servis, animacija za djecu, Wi-Fi dostupan u cijelom hotelu, kuglana, bilijar, podzemna garaža, ski rental i servis, ski škola, prodavnica ski opreme, prodavnica ručno-rađenih originalnih suvenira, transfer od/do aerodroma i specijalne usluge na zahtjev.</p>
            </div>
            <div className={`${styles.rightSide} rightSide`} ref={rightSide} >
                <img src={img1} className={styles.img} alt="" />
            </div>
        </div>
    )
}

export default Section6;