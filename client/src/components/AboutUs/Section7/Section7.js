import styles from "./css/sec7.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef  } from "react";
import "./css/sec7.css";

const Section7 = ()=>{
    gsap.registerPlugin(ScrollTrigger);

    const section7 = useRef(null);
    const container = useRef(null);
    const blue = useRef(null);
    const red = useRef(null);
    const orange = useRef(null);
    const purple = useRef(null);
    const green = useRef(null);

    

    useEffect(()=>{
       
        console.log(container.current);
        const tl = gsap.timeline();

        gsap.defaults({ease: "none", duration: 5})
        tl.from(green.current,{xPercent: -100})
          .from(purple.current,{xPercent: 100})
          .from(orange.current,{yPercent: -100});
          
          ScrollTrigger.create({
            animation: tl,
            trigger: container.current,
            start: "top top",
            end: "+=4000",
            scrub: true,
            // pinSpacing: false,
            pin: true,
            anticipatePin: 1
            // markers: true
          });
      

    },[])
    return(
        <div className={`${styles.section7} section7`} ref={section7}>
            <div className={`${styles.blue} blue`} ref={blue}></div>
            <div className={`${styles.container} container`} ref={container}>
                <div className={`${styles.red} red`} ref={red}>ONE</div>
                <div className={`${styles.green} green`} ref={green}>TWO</div>
                <div className={`${styles.purple} purple`} ref={purple}>THREE</div>
                <div className={`${styles.orange} orange`} ref={orange}>FOUR</div>
            </div>
        </div>
    )
}

export default Section7; 