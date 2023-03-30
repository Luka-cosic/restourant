import styles from "./css/sec5.module.css";

import { useRef, useEffect } from "react";
import img1 from "./images/img1.png";
import "./css/sec5.css";
import { gsapAnimate } from "./JS/gsapAnimate";

const Section4 = ()=>{
    
    const sec5Ref = useRef(null);
    const leftSide = useRef(null);
    const rightSide = useRef(null);

    useEffect(()=>{
        gsapAnimate(sec5Ref, leftSide, rightSide); 
    },[]);

    return(
        <div className={`${styles.section5}`} ref={sec5Ref}>
            <div className={`${styles.leftSide} leftSide`} ref={leftSide} >
                <img src={img1} className={styles.img} alt="" />
            </div>
            <div className={`${styles.rightSide} rightSide`} ref={rightSide} >
                <h1 className={styles.heading}>Kuhinja</h1>
                <p className={styles.text}>Jelovnik predstavlja odabranu kombinaciju jela iz nacionalne i regionalne kuhinje, povezujući srpsku i bosansku, francusku i italijansku. Gastronomski užitak uz specijalitete sa grila, sača i veriga, upotpunjen je bogatim izborom salata, poslastica, sireva, kao i bogatom ponudom lokalnih i stranih vina iz Srbije, Hrvatske, Francuske, Italije i Čilea.</p> 
            </div>
        </div>
    )
}

export default Section4;