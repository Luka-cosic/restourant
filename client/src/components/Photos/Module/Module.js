import styles from "./css/module.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./css/module.css";
import { handleRight, handleLeft } from "./JS/module.js"

const Module = ({ setModuleX, getSrc, setGetSrc }) => {

    const moduleRef = useRef(null);
    const wrapperRef = useRef(null);

    const coloseBtn = () => { setModuleX(false); }
    const clickRight = ()=>{ handleRight(wrapperRef, getSrc, setGetSrc) };
    const clickLeft = ()=>{ handleLeft(wrapperRef, getSrc, setGetSrc) };

    return (
        <div className={styles.module} ref={moduleRef}>
            <div className={styles.imgWrapper} ref={wrapperRef}>
                <div className={styles.closeBtn} onClick={coloseBtn}>
                    <AiFillCloseCircle className={styles.icon} />
                </div>
                <BsFillArrowLeftCircleFill className={styles.leftIcon} onClick={clickLeft}  />
                <BsFillArrowLeftCircleFill className={styles.rightIcon} onClick={clickRight} />

                <img className={styles.img} src={`/images/photos/slika${getSrc}.jpg`} alt="" />
            </div>
        </div>
    )
}

export default Module;