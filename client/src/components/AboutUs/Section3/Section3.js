import styles from "./css/sec_3.module.css";
import img from "./images/img1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

const Section3 = ()=>{
    gsap.registerPlugin(ScrollTrigger);
    const imgRef = useRef(null);
    const sec3Ref = useRef(null);

    useEffect(()=>{
        gsap.to(imgRef.current, {
            width: "100%",
            height: "100%",
            duration: 5,
            scrollTrigger:{
                trigger: imgRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
                // markers: true
            }
        })
    },[]);
    
    return(
        <div className={styles.section3} ref={sec3Ref}>
            <img src={img} className={styles.img} ref={imgRef} alt="" />
        </div>
    )
}

export default Section3;