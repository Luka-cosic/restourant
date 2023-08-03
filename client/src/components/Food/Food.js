import styles from "./css/food.module.css";
import { getUser } from "../Login/JS/login";
import { useState, useEffect } from "react";
import NewMeal from "./NewMeal/NewMeal";
import SeeAll from "./SeeAll/SeeAll.js";
import { useRef } from "react";
import { fetchAll } from "../../api";
import Card from "./Card/Card";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import "./css/food.css";

const Food = ({ closeChange, setAddToCart }) => {
    closeChange?.remove("change");

    const user = getUser()?.result;

    const [isVisible, setIsVisible] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const [allMeals, setAllMeals] = useState([]);
    const [copyAllMeals, setcopyAllMeals] = useState([]);

    const [readMoreCard, setReadMoreCard] = useState("");
    const [count, setCount] = useState(1);
    const pagWrap = useRef(null)
    const [pagin, setPagin] = useState(0);
    const [all, setAll] = useState(true);
    const [k, setK] = useState(6);
    const [j, setJ] = useState(3);
    // const c = 3

    const changeStyle = () => {

        let pagBtns = document.querySelectorAll(".pagBtn");
        let activePag = document.querySelectorAll(".activePag")[0];
        Array.from(pagBtns).forEach((el) => {
            el.classList.remove("activePag");
        })
        if (activePag.nextElementSibling === null) {
            return pagBtns[0].classList.add("activePag");
        }
        activePag.nextElementSibling.classList.add("activePag");

    }


    const handleRight = () => {
        let activePag = document.querySelectorAll(".activePag")[0];

        changeStyle();

        let rez = copyAllMeals.filter((el, i) => {
            return i >= j && i < k
        });

        console.log(pagWrap.current.lastChild.previousElementSibling === activePag);
        console.log(j, k);
        if (pagWrap.current.lastChild === activePag) {
            setJ(0);
            setK(3);
            setAllMeals(copyAllMeals);
            // return
        } else {
            setJ(j + 3);
            setK(k + 3);
        }
        setAllMeals(rez);

    }

    if (all) {
        var cards = allMeals.map((el) => {
            return <Card el={el} key={el._id} setAllMeals={setAllMeals} setIsEdit={setIsEdit} setIsVisible={setIsVisible} setCurrentId={setCurrentId}
                allMeals={allMeals} setReadMoreCard={setReadMoreCard} readMoreCard={readMoreCard} setReadMore={setReadMore} setAddToCart={setAddToCart}
                count={count} setCount={setCount} />
        }).slice(0, 3);
    } else {
        var cards = allMeals.map((el) => {
            return <Card el={el} key={el._id} setAllMeals={setAllMeals} setIsEdit={setIsEdit} setIsVisible={setIsVisible} setCurrentId={setCurrentId}
                allMeals={allMeals} setReadMoreCard={setReadMoreCard} readMoreCard={readMoreCard} setReadMore={setReadMore} setAddToCart={setAddToCart}
                count={count} setCount={setCount} />
        }).slice(0, copyAllMeals.length);
    }




    // Pagin
    let arr = []
    const makePages = () => {
        const p = Math.ceil(pagin / 3);
        for (let i = 0; i < p; i++) {
            arr.push(<div className={`${styles.pagBtn} pagBtn ${i === 0 ? "activePag" : ""}`} key={i} >{i + 1}</div>)
        }
    }
    makePages()


    //    end of pagin

    const handleSearch = (e) => {
        setAll(false);
        let rez = copyAllMeals.filter((el) => {
            return el.type === e.target.innerText
        });
        setAllMeals(rez);
    }

    const fetchAll_1 = async (e) => {
        let { data } = await fetchAll();
        setAllMeals(data.result);
        setcopyAllMeals(data.result)
        setPagin(data.length)
        setIsLoading(false);
    }
    useEffect(() => {
        fetchAll_1()

    }, []);

    if (isLoading) return <h1 className={styles.loading}>Loading Ucitavanje</h1>
    return (
        <div className={styles.container} >

            {readMore && <SeeAll readMoreCard={readMoreCard} setReadMore={setReadMore} setAllMeals={setAllMeals} allMeals={allMeals} setReadMoreCard={setReadMoreCard} />}
            {isVisible && <NewMeal setIsVisible={setIsVisible} setIsEdit={setIsEdit} isEdit={isEdit} currentId={currentId} setCurrentId={setCurrentId} allMeals={allMeals} setAllMeals={setAllMeals} />}
            {user?.admin &&
                <div className={styles.createNewBtn} onClick={() => { setIsVisible(true) }}>
                    <p className={styles.text}>Create New</p>
                </div>
            }

            <div className={styles.allMeals}>
                <div className={styles.searchButtons}>
                    <button className={styles.srcBtn} onClick={() => { setAllMeals(copyAllMeals); setAll(false) }}>All</button>
                    <button className={styles.srcBtn} onClick={handleSearch}>Pizza</button>
                    <button className={styles.srcBtn} onClick={handleSearch}>Pasta</button>
                    <button className={styles.srcBtn} onClick={handleSearch}>Sopu</button>
                    <button className={styles.srcBtn} onClick={handleSearch}>Pizza</button>
                </div>


                {cards}

            </div>
            { all &&
                <div className={styles.paginationWrapp}>
                    <div className={styles.arrow} ><AiFillCaretLeft /> </div>
                    <div className={styles.btns} ref={pagWrap}>
                        {arr}
                    </div>
                    <div className={styles.arrow} onClick={handleRight}><AiFillCaretRight /></div>
                </div>}

        </div>

    )
}

export default Food;