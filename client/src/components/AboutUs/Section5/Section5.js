import styles from "./css/sec5.module.css";
import { gsapAnimate } from "./JS/gsapAnimate.js";
import img1 from "./images/img1.png";
import "./css/sec5.css";

import { useRef, useEffect } from "react";

const Section4 = () => {

    const rightSide = useRef(null);

    useEffect(() => {
        gsapAnimate(rightSide);
    }, []);

    return (
        <div className={`${styles.section5}`} >
            <div className={`${styles.leftSide} leftSide`} >
                <img src={img1} className={styles.img} alt="" />
            </div>
            <div className={`${styles.rightSide} rightSide`} ref={rightSide} >
                <h1 className={`${styles.heading} heading`}>Kuhinja</h1>
                <div className={`${styles.textDiv} textDiv`}>
                    <p className={`${styles.text} text`}>Jelovnik predstavlja odabranu kombinaciju jela iz nacionalne i regionalne kuhinje, povezujući srpsku i bosansku, francusku i italijansku. Gastronomski užitak uz specijalitete sa grila, sača i veriga, upotpunjen je bogatim izborom salata, poslastica, sireva, kao i bogatom ponudom lokalnih i stranih vina iz Srbije, Hrvatske, Francuske, Italije i Čilea.</p>
                </div>
            </div>

        </div>
    )
}

export default Section4;