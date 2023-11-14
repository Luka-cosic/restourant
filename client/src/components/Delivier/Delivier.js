import styles from "./css/delivier.module.css";
import { useEffect  } from "react";
import { getUser } from "../Login/JS/login.js";
import Card from "./Card/Card";


const Delivier = ({ allOrdered, setAllOrdered})=>{
    const allOrders = allOrdered.map((el, i)=>{
        return <Card el={el} key={i} />
    })
    const getUser_1 = async ()=>{
        const { allOrders } = getUser();
        setAllOrdered(allOrders); 
    }

    useEffect(()=>{
        getUser_1()
    },[])
    return(
        <div className={styles.container}>
            {allOrders}
        </div>
    )
}

export default Delivier;