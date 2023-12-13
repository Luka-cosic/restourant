import styles from "./css/delivier.module.css";
import { useEffect  } from "react";
import { getAllTheOrders } from "../../api/index.js";
import Card from "./Card/Card";
import { io } from 'socket.io-client';



const Delivier = ({ allOrdered, setAllOrdered })=>{
    const allOrders = allOrdered.map((el, i)=>{
        return <Card el={el} key={i} />
    })
    const getAllTheOrders_1 = async ()=>{
        const { data } = await getAllTheOrders();
        setAllOrdered(data.allOrders);
    }
    const socetIOFunc = ()=>{
        const socket = io('https://restaurant1-1089fa3ddcde.herokuapp.com/');
        socket.on('fromServer', (msg) => {
            setAllOrdered(msg)  
        });

        socket.on('fromServerDC', (msg) => {
            setAllOrdered(msg);  
        });
    }

    useEffect(()=>{
        getAllTheOrders_1();
        socetIOFunc();
        
    },[]);
    return(
        <div className={styles.container}>
            {allOrders}
        </div>
    )
}

export default Delivier;