import styles from "./css/sec6.module.css";
import { useRef, useEffect } from "react";
import { gsapAnimate } from "./JS/gsapAnimate";
import img1 from "./images/img1.png";
import "./css/sec6.css";


const Section6 = () => {

    const leftSide = useRef(null);

    useEffect(() => {
        gsapAnimate(leftSide);
    }, []);

    return (
        <div className={`${styles.section6}`} >
            <div className={`${styles.leftSide} leftSide`} ref={leftSide} >
                <h1 className={`${styles.heading} heading`}>Usluge</h1>
                <div className={`${styles.textDiv} textDiv`} >
                    <p className={styles.text}>Room servis, animacija za djecu, Wi-Fi dostupan u cijelom hotelu, kuglana, bilijar, podzemna garaža, ski rental i servis, ski škola, prodavnica ski opreme, prodavnica ručno-rađenih originalnih suvenira, transfer od/do aerodroma i specijalne usluge na zahtjev.</p>
                </div>
            </div>
            <div className={`${styles.rightSide} rightSide`} >
                <img src={img1} className={styles.img} alt="" />
            </div>
        </div>
    )
}

export default Section6;