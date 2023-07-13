import { useState, useEffect } from "react";
import styles from "./css/orderCard.module.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { cart, delFromCart } from "../../../api/index";
import { getUser, saveUser } from "../../Login/JS/login.js";

const OrderCard = ({ card, setAddToCart }) => {

    const [col, setCol] = useState(card.col);
    const [uk, setUk] = useState(card.price * card.col);
    // console.log(card);
    
    const handlePlus = async () => {
        setCol((prev) => { return prev + 1 });
        setUk((prev) => { return prev + Number(card.price) });
        card.op = "plus";
        let { data } = await cart(card);
        setAddToCart(data.cart)
        
    };

    const handleMinus = async () => {
        if (uk === 0) return;
        setCol((prev) => { return prev - 1 });
        setUk((prev) => { return prev - Number(card.price) });
        card.op = "minus";
        let { data } = await cart(card);
        setAddToCart(data.cart)
    };
    
    const handleDel = async () => {
        let { data } = await delFromCart(card.user, card.mealId);
        
        setAddToCart(data);
        let radi = getUser();
        radi.result.cart = data;
        saveUser(radi)
    }
    useEffect(() => {
        
    }, []);
    return (
        <div className={styles.orderedCard}>
            <button className={styles.delete} onClick={handleDel}>DELETE</button>
            <div className={styles.imgWrapp}>
                <img src={card.img} className={styles.img} alt="" />
            </div>
            <div className={styles.plus} onClick={handlePlus}>
                <AiFillPlusCircle />
            </div>
            <div className={styles.priceWrapp}>
                <h4 className={styles.title}>{card.title}</h4>
                <div className={styles.priceCol}>
                    <div className={styles.price}>{card.price}$</div>
                    <div className={styles.col}>Col: {col}</div>
                    <div className={styles.price}>UK:{uk}$</div>
                </div>
            </div>
            <div className={styles.minus} onClick={handleMinus}>
                <AiFillMinusCircle />
            </div>
        </div>
    )
}

export default OrderCard;