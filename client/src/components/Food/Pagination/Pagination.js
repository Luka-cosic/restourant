import styles from "./css/pagination.module.css";
import { useRef } from "react";
import { pagBtnsStyle } from "./JS/makeStyle.js";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { handlePagin_1 } from "./JS/handlePagin_1.js";
import { makePages_1 } from "./JS/makePages_1.js";
import "./css/activePag.css";


const Pagination = ({ pagin, copyAllMeals, setAllMeals }) => {

    const pagWrap = useRef(null);
    const leftArr = useRef(null);
    const rightArr = useRef(null);

    const changeStyle = (prop) => {
        pagBtnsStyle(prop);
    }

    // Pagin
    let arr = []
    const makePages = () => {
        makePages_1(pagin, arr, styles)
    }
    makePages()

    const handlePagin = (bool) => {
        handlePagin_1(bool, leftArr, copyAllMeals, pagWrap, rightArr, setAllMeals, changeStyle)
    }

    return (
        <div className={styles.paginationWrapp}>
            <div className={styles.arrowLeft} ref={leftArr} onClick={() => { handlePagin(false) }} ><AiFillCaretLeft /> </div>
            <div className={styles.btns} ref={pagWrap}>
                {arr}
            </div>
            <div className={styles.arrowRight} ref={rightArr} onClick={() => { handlePagin(true) }}><AiFillCaretRight /></div>
        </div>
    )
}

export default Pagination;