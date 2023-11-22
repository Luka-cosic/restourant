import { useEffect, useState } from "react";
import styles from "./css/order.module.css";
import OrderCard from "./OrderCard/OrderCard";
import { getUser, saveUser } from "../Login/JS/login";
import { getFromCart_1, orderFood } from "../../api/index";
import { io } from 'socket.io-client';



const Order = ({ closeChange, addToCart, setAddToCart }) => {
    closeChange?.remove("change");

    let [isLoading, setIsLoading] = useState(false);
    let user = getUser();
    let [customer, setCustomer] = useState({ name: user.result.firstName, lastName: user.result.lastName, email: user.result.email, adress: "", phone: "", total: "" });
    let [message, setMessage] = useState("");
    let uk = 0;

    addToCart.forEach(el => {
        uk = uk + el.col * el.price;

    });

    const getFromCart = async () => {
        setIsLoading(true);
        let { data } = await getFromCart_1(user.result._id);
        setAddToCart(data)
        setIsLoading(false)
    }

    const handleFocus = () => { }

    const order = async (e) => {
        e.preventDefault();
        if (addToCart.length === 0) {
            alert("You Have To Order First");
            return
        }
        const { data } = await orderFood(customer, addToCart);
        socetIoFunc( data.orderedFood );
        setMessage(data.msg1);
        setTimeout(()=>{
            setMessage("");
        }, 5000);
        if (data) {
            let radi = getUser();
            radi.result.cart = [];
            saveUser(radi)
            setAddToCart([]);
        }
    }
    const socetIoFunc = (data) =>{
        const socket = io('http://localhost:5000');
        // socket.on('connect', () => console.log(socket.id));
        if (data) {
            socket.emit('chat message', data);
          }
    }
    const allOrdered = addToCart.map((card, i) => {

        return (
            <OrderCard card={card} key={i} setAddToCart={setAddToCart} />
        )
    })

    useEffect(() => {
        getFromCart(); 
    }, []);


    if (isLoading) return <h1 className={styles.message}>Ucitavanje</h1>;

    return (
        <div className={styles.container}>
            <div className={styles.orderWrapp}>
                {allOrdered}
                {addToCart.length === 0 && <h1 className={styles.message}>Your Cart Is Empty</h1>}
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
                    <input type="text" className={styles.input} autoComplete="on" onChange={(e) => { setCustomer({ ...customer, adress: e.target.value }) }} placeholder="Adress" />
                </div>
                <div className={`${styles.inputWrapp} inputWrapp`} onClick={handleFocus}>
                    <input type="text" className={styles.input} autoComplete="on" onChange={(e) => { setCustomer({ ...customer, phone: e.target.value }) }} placeholder="Number" />
                </div>
                <h3 className={styles.total}>Total For Payment: {uk}$</h3>
                <button className={styles.orderBtn} onClick={order}>ORDER</button>
                {message && <div className={styles.successfulMessage}>{message}</div>}
                 
            </form>
        </div>
    )
}

export default Order;