import styles from "./css/sec9.module.css"
import screen from "./images/laptop-screen.png";
import table from "./images/laptop-table.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Section9 = ()=>{

    const contRef = useRef();
    const screenRef = useRef();


    useEffect(()=>{

        let ctx = gsap.context(()=>{
            gsap.to(screenRef.current, {
                rotateX: 0,
                scrollTrigger: {
                    trigger: contRef.current,
                    start: "center center",
                    markers: true
                }
            })
        }, contRef);

        return () => ctx.revert();
    },[])
    return(
        <div className={styles.container} ref={contRef}>
            <div className={styles.imgHolder}>
                <div className={styles.screenWrapper} ref={screenRef}>
                    <div className={styles.map}>
                        
                    </div>
                    <img className={styles.screenImg} src={screen} alt="" />
                </div>
                <div className={styles.tableWrapper}>
                    <img className={styles.tableImg} src={table} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Section9;