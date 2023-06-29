import styles from "./css/section4_1.module.css";
import Section4 from "../Section4/Section4.js";
import Section5 from "../Section5/Section5.js";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Section4_1 = () => {

    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const imgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(()=>{
            gsap.to(imgRef.current,{
                yPercent: 50,
                scrollTrigger: {
                    trigger: imgRef.current,
                    scrub: 0.5,
                    start: "30% top",
                    markers: true
                }
            })
            
        }, imgRef);

        return ()=> ctx.revert();
    }, [])
    return (
        <div className={styles.contsiner} ref={containerRef}>
            <div className={styles.wrapper} ref={wrapperRef}>
                <Section4 />
                <div className={styles.imgWrapp}>
                    <div className={styles.imgHolder}>
                        <img src="../../../../images/aboutUs/center1.jpg" ref={imgRef} className={styles.img} alt="" />
                    </div>
                </div>
                <Section5 />
            </div>

        </div>
    )
}

export default Section4_1;