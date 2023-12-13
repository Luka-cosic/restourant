import styles from "./css/sec7.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import "./css/sec7.css";

import jah1 from "./images/jahorina.jpg";

import jah3 from "./images/jahorina3.jpg";
import jah4 from "./images/jahorina4.jpg";
import jah5 from "./images/jahorina5.jpg";
import jah6 from "./images/jahorina6.jpg";
import jah7 from "./images/jahorina7.jpg";
import jah8 from "./images/jahorina8.jpg";

import jah9 from "./images/jahorina9.jpg";



const Section7 = () => {
    gsap.registerPlugin(ScrollTrigger);

    const firstRef = useRef();
    const secondRef = useRef();
    const wrapperRef = useRef();
    const imgHolRef = useRef();
    const imgHol2Ref = useRef();



    useLayoutEffect(() => {
    
        const ctx = gsap.context((self) => {

            const sections = self.selector("section");

            const stopPanel = sections.findIndex((section) => section.dataset.pin);
            const stopPanel2 = sections.findIndex((section) => section.dataset.pin2);
          
            
            gsap
                .timeline({
                    defaults: {
                        ease: "none"
                    },
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        pin: true,
                        scrub: 0.5,
                        end: () => "+=" + wrapperRef.current.offsetWidth,
                        // markers: true
                    }
                })
                .to(sections, {
                    xPercent: -(100 * stopPanel),
                    duration: stopPanel,
                    onComplete: () => imgHolRef.current.classList.add("change")
                })

                .to(firstRef.current, {
                    duration: 3,
                    scale: 7
                })
                .to(sections, {
                    xPercent: -(100 * stopPanel2),
                    duration: stopPanel2,
                    onComplete: () => imgHol2Ref.current.classList.add("change")

                })
                .to(secondRef.current, {
                    scale: 5.5,
                    duration: 3
                })
                .to(sections, {
                    xPercent: -(100 * (sections.length - 1)),
                    duration: sections.length - stopPanel2
                });
        }, wrapperRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <section className={styles.header}>
                <h1 className={styles.heading}>JAHORONA</h1>
                <div className={styles.head_imgWrapper}>
                    <img className={styles.head_img} src={jah1} alt="" />
                </div>
                <p className={styles.headerText}>Zavirite u božanstveni svijet ljetnih aktivnosti, atrakcija, neprikosnovene zabave i očaravajuće netaknute prirode! Neka Jahorina ovog ljeta bude vaša zelena oaza mira i odmora!</p>
            </section>
            <section className={styles.sec1} data-pin="true">
                <div className={styles.sec1_ImgHolder} ref={imgHolRef}>
                    <div className={`${styles.sec1_imgWrapper} sec7_change`}>
                        <img className={styles.img} src={jah5} alt="" />
                    </div>
                    <div className={`${styles.sec1_imgWrapper} sec7_change`}>
                        <img className={styles.img} src={jah6} alt="" />
                    </div>
                    <div className={`${styles.sec1_imgWrapper} sec7_change`}>
                        <img className={styles.img} src={jah3} alt="" />
                    </div>
                    <div className={`${styles.sec1_imgWrapper} sec7_change`}>
                        <img className={styles.img} src={jah4} alt="" />
                    </div>
                </div>
                <h2 className={styles.sec1_header} ref={firstRef}>ZIMA</h2>
            </section>
            <section className={styles.second} data-pin2="true">
            <div className={styles.sec1_ImgHolder} ref={imgHol2Ref}>
                    <div className={`${styles.sec1_imgWrapper} sec7_change`}>
                        <img className={styles.img} src={jah1} alt="" />
                    </div>
                    <div className={`${styles.sec1_imgWrapper} sec7_change`}>
                        <img className={styles.img} src={jah7} alt="" />
                    </div>
                    <div className={`${styles.sec1_imgWrapper} sec7_change`}>
                        <img className={styles.img} src={jah8} alt="" />
                    </div>
                    <div className={`${styles.sec1_imgWrapper} sec7_change`}>
                        <img className={styles.img} src={jah9} alt="" />
                    </div>
                </div>
                <h2 className={styles.sec1_header} ref={secondRef}>LETO</h2>
            </section>
        </div>
    )
}

export default Section7; 