import { useEffect, useState } from "react";
import styles from "./css/order.module.css";
import OrderCard from "./OrderCard/OrderCard";
import { getUser } from "../Login/JS/login";
import { getFromCart_1 } from "../../api/index";

const Order = ({closeChange, addToCart,setAddToCart})=>{
    closeChange?.remove("change");
    
    let [isLoading, setIsLoading] = useState(false);
    let user = getUser();
    // console.log(user);

    const getFromCart = async ()=>{
        setIsLoading(true);
        let {data} = await getFromCart_1(user.result._id);
        setAddToCart(data)
        setIsLoading(false) 
    }
    
    const allOrdered = addToCart.map((card,i)=>{
        return(
            <OrderCard card={card} key={i} setAddToCart={setAddToCart} />
        )
    })

    useEffect(()=>{
        getFromCart()
    },[]);

    if(isLoading) return "<h1>Ucitavanje</h1>";
    return(
        <div className={styles.container}>
            <div className={styles.orderWrapp}>
                {allOrdered}
            </div>
            <form className={styles.form}>
                
            </form>
        </div>
    )
}

export default Order;