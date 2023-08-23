import styles from "./css/food.module.css";
import { getUser } from "../Login/JS/login";
import { useState, useEffect } from "react";
import NewMeal from "./NewMeal/NewMeal";
import SeeAll from "./SeeAll/SeeAll.js";
import Pagination from "./Pagination/Pagination.js";
import CreateNewBtn from "./CreateNewBtn/CreateNewBtn.js";
import { fetchAll } from "../../api";

import Card from "./Card/Card";
import Search from "./Search/Search";


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

    const [pagin, setPagin] = useState(0);
    const [all, setAll] = useState(true);



    if (all) {
        var cards = allMeals.map((el) => {
            return <Card el={el} key={el._id} setAllMeals={setAllMeals} setIsEdit={setIsEdit} setIsVisible={setIsVisible} setCurrentId={setCurrentId}
                allMeals={allMeals} setReadMoreCard={setReadMoreCard} readMoreCard={readMoreCard} setReadMore={setReadMore} setAddToCart={setAddToCart}
                count={count} setCount={setCount} />
        }).slice(0, 4);
    } else {
        var cards = allMeals.map((el) => {
            return <Card el={el} key={el._id} setAllMeals={setAllMeals} setIsEdit={setIsEdit} setIsVisible={setIsVisible} setCurrentId={setCurrentId}
                allMeals={allMeals} setReadMoreCard={setReadMoreCard} readMoreCard={readMoreCard} setReadMore={setReadMore} setAddToCart={setAddToCart}
                count={count} setCount={setCount} />
        }).slice(0, copyAllMeals.length);
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
            {user?.admin && <CreateNewBtn setIsVisible={setIsVisible} />}

            <div className={styles.allMeals}>
                <Search setAll={setAll} copyAllMeals={copyAllMeals} setAllMeals={setAllMeals} all={all} />
                {cards}
            </div>
            {all && <Pagination pagin={pagin} copyAllMeals={copyAllMeals} setAllMeals={setAllMeals} />}

        </div>

    )
}

export default Food;