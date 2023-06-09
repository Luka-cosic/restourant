import styles from "./css/module.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Module = ({ setModuleX, img }) => {
    console.log(img);
    
    const moduleRef = useRef(null);
    const coloseBtn = (e) => {
        setModuleX(false);
    }
    return (
        <div className={styles.module} ref={moduleRef}>
            <div className={styles.imgWrapper}>
                <div className={styles.closeBtn} onClick={coloseBtn}>
                    <AiFillCloseCircle className={styles.icon} />
                </div>
                <BsFillArrowLeftCircleFill className={styles.leftIcon} />
                <BsFillArrowLeftCircleFill className={styles.rightIcon} />

                <img className={styles.img} src={img} alt="" />
            </div>
        </div>
    )
}

export default Module;