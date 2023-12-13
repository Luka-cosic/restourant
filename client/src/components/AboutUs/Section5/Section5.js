import styles from "./css/sec5.module.css";
// import gsap from "gsap";
import img1 from "./images/img1.png";
import "./css/sec5.css";
// import { gsapAnimate } from "./JS/gsapAnimate";
import { useRef } from "react";

// import img2 from "./images/koli2.jpg";
// import img3 from "./images/koli3.jpg";
// import img4 from "./images/koli4.jpg";
// import img5 from "./images/koli5.jpg";
// import img6 from "./images/koli6.jpg";
// import img7 from "./images/koli7.jpg";
// import img8 from "./images/koli8.jpg";
// import img9 from "./images/koli9.jpg";

const Section4 = ()=>{
    
    const sec5Ref = useRef(null);
    const leftSide = useRef(null);
    const rightSide = useRef(null);
    // const imagesRef = useRef(null);
    
    // useLayoutEffect(() => {
    //     let ctx = gsap.context((self) => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: sec5Ref.current,
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

    //     }, sec5Ref);

    //     return () => ctx.revert()
    //     // gsapAnimate(sec4Ref,leftSide, rightSide); 
    // }, []);

    return(
        <div className={`${styles.section5}`} ref={sec5Ref}>
            <div className={`${styles.leftSide} leftSide`} ref={leftSide} >
                <img src={img1} className={styles.img} alt="" />
            </div>
            <div className={`${styles.rightSide} rightSide`} ref={rightSide} >
                <h1 className={styles.heading}>Kuhinja</h1>
                <p className={styles.text}>Jelovnik predstavlja odabranu kombinaciju jela iz nacionalne i regionalne kuhinje, povezujući srpsku i bosansku, francusku i italijansku. Gastronomski užitak uz specijalitete sa grila, sača i veriga, upotpunjen je bogatim izborom salata, poslastica, sireva, kao i bogatom ponudom lokalnih i stranih vina iz Srbije, Hrvatske, Francuske, Italije i Čilea.</p> 
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