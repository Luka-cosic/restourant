import { useState, useEffect } from "react";
import styles from "./css/orderCard.module.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { cart, delFromCart } from "../../../api/index";

const OrderCard = ({card, setAddToCart})=>{
   
    const [col, setCol] = useState(card.col);
    const [uk, setUk] = useState(card.price * card.col);
    const handlePlus = async ()=>{
       setCol((prev)=>{return prev + 1});
       setUk((prev)=>{return prev + Number(card.price) });
       card.op = "plus";
      let {data} = await cart(card); 
    };

    const handleMinus = ()=>{
        if(uk === 0) return;
        setCol((prev)=>{return prev - 1});
        setUk((prev)=>{return prev - Number(card.price) });
        card.op = "minus";
        cart(card);
     };
     const handleDel = async ()=>{
        let {data} = await delFromCart(card.user, card.mealId);
        setAddToCart(data)
        
        
     }
    useEffect(()=>{

    },[]);
    return(
        <div className={styles.orderedCard}>
            <h4 className={styles.title}>{card.title}</h4>
            <button className={styles.delete} onClick={handleDel}>DELETE</button>
            <div className={styles.imgWrapp}>
                <img src={card.img} className={styles.img} alt="" />
            </div>
            <div className={styles.plus} onClick={handlePlus }>
                <AiFillPlusCircle />
            </div>
            <div className={styles.price}>{card.price}$</div>
            <div className={styles.col}>Col: {col}</div>
            <div className={styles.price}>UK:{uk}$</div>

            <div className={styles.plus} onClick={handleMinus }>
                <AiFillMinusCircle />
            </div>
        </div>
    )
}

export default OrderCard;