import { useEffect, useState } from "react";
import styles from "./css/order.module.css";
import OrderCard from "./OrderCard/OrderCard";
import { getUser } from "../Login/JS/login";
import { getFromCart_1, orderFood } from "../../api/index";

const Order = ({closeChange, addToCart,setAddToCart})=>{
    closeChange?.remove("change");
    
    let [isLoading, setIsLoading] = useState(false);
    let user = getUser();
    let [ customer, setCustomer ] = useState({name:user.result.firstName, lastName:user.result.lastName,email:user.result.email,adress:"",phone:"", total: "" });

    let uk = 0;
    
    addToCart.forEach(el => {
        uk = uk + el.col * el.price 
    });
    
    const getFromCart = async ()=>{
        setCustomer({...customer, total: uk});
        setIsLoading(true);
        let {data} = await getFromCart_1(user.result._id);
        setAddToCart(data)
        setIsLoading(false) 
    }

    const handleFocus = ()=>{}
   
    const order = ()=>{
        setCustomer({...customer, total: uk});
        orderFood(customer, addToCart);
    }
    const allOrdered = addToCart.map((card,i)=>{
  
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
            <form className={styles.form} autoComplete="on">
                <h1 className={styles.heading}>Order</h1>
               
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
                    <input type="text" className={styles.input} autoComplete="on" onChange={(e)=>{setCustomer({...customer, adress:e.target.value })}} placeholder="Adress" />
                </div>
                <div className={`${styles.inputWrapp} inputWrapp`} onClick={handleFocus}>
                    <input type="text" className={styles.input} autoComplete="on" onChange={(e)=>{setCustomer({...customer, phone:e.target.value })}} placeholder="Number" />
                </div>
                <h3 className={styles.total}>Total For Payment: {uk}$</h3>
                <button className={styles.orderBtn} onClick={order}>ORDER</button>
            </form>
        </div>
    )
}

export default Order;