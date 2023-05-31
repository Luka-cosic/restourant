import { useEffect, useState } from "react";
import styles from "./css/order.module.css";
import OrderCard from "./OrderCard/OrderCard";
import { getUser } from "../Login/JS/login";
import { getFromCart_1 } from "../../api/index";

const Order = ({closeChange, addToCart,setAddToCart})=>{
    closeChange?.remove("change");
    // console.log(addToCart);
    
    let [isLoading, setIsLoading] = useState(false);
    let user = getUser();

    let uk = 0;
    
    addToCart.forEach(el => {
        uk = uk + el.col * el.price 
    });
    
    const getFromCart = async ()=>{
        setIsLoading(true);
        let {data} = await getFromCart_1(user.result._id);
        setAddToCart(data)
        setIsLoading(false) 
    }

    const handleFocus = ()=>{}
    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    const allOrdered = addToCart.map((card,i)=>{
    //    uk = uk + card.col * card.price;
        return(
            <OrderCard card={card} key={i} setAddToCart={setAddToCart} />
        )
    })

    useEffect(()=>{
        getFromCart();
    },[]);

    if(isLoading) return "<h1>Ucitavanje</h1>";
    return(
        <div className={styles.container}>
            <div className={styles.orderWrapp}>
                {allOrdered}
            </div>
            <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">
                <h1 className={styles.heading}>Login</h1>
               
                    <div className={styles.inputReg}>
                        <div className={`${styles.inputWrapp} inputWrapp changeL`} onClick={handleFocus}>
                            <input type="text" className={styles.input} value={user.result.firstName} readOnly />
                        </div>
                        <div className={`${styles.inputWrapp} inputWrapp`} >
                            <input type="text" className={styles.input} value={user.result.lastName} readOnly />
                        </div>
                    </div>
            
                <div className={`${styles.inputWrapp} inputWrapp`}>
                    <input type="text" className={styles.input} autoComplete="on" value={user.result.email} readOnly />
                </div>

                <div className={`${styles.inputWrapp} inputWrapp`} onClick={handleFocus}>
                    <input type="text" className={styles.input} autoComplete="on" placeholder="Adress" />
                </div>
                <div className={`${styles.inputWrapp} inputWrapp`} onClick={handleFocus}>
                    <input type="text" className={styles.input} autoComplete="on" placeholder="Number" />
                </div>
                <h3 className={styles.total}>Total For Payment: {uk}$</h3>
                <button className={styles.orderBtn} >ORDER</button>
            </form>
        </div>
    )
}

export default Order;