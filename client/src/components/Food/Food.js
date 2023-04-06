import styles from "./css/food.module.css";
import { getUser } from "../Login/JS/login";
import { useState, useEffect } from "react";
import NewMeal from "./NewMeal";
import SeeAll from "./SeeAll/SeeAll.js";

import { fetchAll } from "../../api";
import Card from "./Card/Card";

const Food = ({ closeChange }) => {
    closeChange?.remove("change");

    const user = getUser()?.result;
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const [allMeals, setAllMeals] = useState([]);
    const [readMoreCard, setReadMoreCard] = useState("");
  
    
    const cards = allMeals.map((el) => {
        return <Card el={el} key={el._id} setAllMeals={setAllMeals} setIsEdit={setIsEdit} setIsVisible={setIsVisible} setCurrentId={setCurrentId} allMeals={allMeals} setReadMoreCard={setReadMoreCard} />
    })
    useEffect(() => {
        const res = fetchAll().then((value) => {
            setAllMeals(value.data.result);
            setIsLoading(false)
        })

    }, []);

    if (isLoading) return <h1 className={styles.loading}>Loading Ucitavanje</h1>
    return (
        <div className={styles.container}>
            {/* <SeeAll readMoreCard={readMoreCard}/> */}
            {isVisible && <NewMeal setIsVisible={setIsVisible} setIsEdit={setIsEdit} isEdit={isEdit} currentId={currentId} setCurrentId={setCurrentId} allMeals={allMeals} setAllMeals={setAllMeals} />}
            {user?.admin &&
                <div className={styles.createNewBtn} onClick={() => { setIsVisible(true) }}>
                    <p className={styles.text}>Create New</p>
                </div>
            }

            <div className={styles.allMeals}>
                {cards}
            </div>
        </div>

    )
}

export default Food;