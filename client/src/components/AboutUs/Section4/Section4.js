import styles from "./css/sec4.module.css";

import { useRef, useLayoutEffect } from "react";
import img1 from "./images/img1.png";
import img2 from "./images/koli2.jpg";
import img3 from "./images/koli3.jpg";
import img4 from "./images/koli4.jpg";
import img5 from "./images/koli5.jpg";
import img6 from "./images/koli6.jpg";
import img7 from "./images/koli7.jpg";
import img8 from "./images/koli8.jpg";
import img9 from "./images/koli9.jpg";



import "./css/sec4.css";
import { gsapAnimate } from "./JS/gsapAnimate";
import { gsap } from "gsap";

const Section4 = () => {

    const sec4Ref = useRef(null);
    const rightSide = useRef(null);
    const leftSide = useRef(null);
    const imagesRef = useRef(null);


    // useLayoutEffect(() => {
    //     let ctx = gsap.context((self) => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: sec4Ref.current,
    //                 start: "-20% top",
    //                 scrub: 1,
    //                 pin: true,
    //                 end: "6000px",
    //                 markers: true
    //             }
    //         })
    //             .to(imagesRef.current, {
    //                 y: -1000
    //             })

    //     }, sec4Ref);

    //     return () => ctx.revert()
    //     // gsapAnimate(sec4Ref,leftSide, rightSide); 
    // }, []);

    return (
        <div className={`${styles.section4}`} ref={sec4Ref}>
            <div className={`${styles.leftSide} leftSide`} ref={leftSide} >
                <h1 className={styles.heading}>Enterier</h1>
                <p className={styles.text}>Renomirani sarajevski arhitekta Amir Vuk Zec, dobitnik najviših priznanja i nagrada za dizajn enterijera Hotela Termag i etno restorana Koliba, rekao je: “Pravi objekat na pravom mjestu, oslikava ambijent Jahorine i daje potpuni ugođaj. Drvo u svom punom i iskrenom izrazu. U virtuelnom vremenu, vratite se sebi i prirodi - Hotelu Termag.”</p>
            </div>
            <div className={`${styles.rightSide} rightSide`} ref={rightSide} >
                <img src={img1} className={styles.img} alt="" />
            </div>
            {/* <div className={styles.treci} ref={imagesRef}>
                <div className={styles.proba}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.proba1}>
                    <img src={img2} alt="" />

                </div>
                <div className={styles.proba2}>
                    <img src={img3} alt="" />

                </div>
                <div className={styles.proba3}>
                    <img src={img4} alt="" />

                </div>
                <div className={styles.proba4}>
                    <img src={img5} alt="" />

                </div>
                <div className={styles.proba5}>
                    <img src={img6} alt="" />

                </div>
                <div className={styles.proba6}>
                    <img src={img7} alt="" />

                </div>
                <div className={styles.proba7}>
                    <img src={img9} alt="" />

                </div>
                <div className={styles.proba8}>
                    <img src={img9} alt="" />

                </div>

            </div> */}
        </div>
    )
}

export default Section4;