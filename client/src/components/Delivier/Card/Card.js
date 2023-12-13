import styles from "./css/card.module.css";
import { deleteOrderedCard } from "../../../api/index";
import { io } from 'socket.io-client';


const Card = ({el})=>{
     
    const ordered = el.forOrder.map((meal,i)=>{
        
        
        return(
            <div className={styles.meal} key={i}>{meal.title}; col: {meal.col}; {meal.price} din</div>
        )
    })
    
    const handleDelete = async (id)=>{
       const { data } = await deleteOrderedCard(id); 
        socetIoFunc(data); 
    }

    const socetIoFunc = (data) =>{
        const socket = io('https://restaurant1-1089fa3ddcde.herokuapp.com/');
       
            socket.emit('deleteCard', data);
          
    }
   
    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.name}>{el.name}</div>
                <div className={styles.phone}>{el.phone}</div>
            </div>
            <div className={styles.body}>
                { ordered }
            </div>
            <div className={styles.footer}>
                <div className={styles.total}>{el.total} din</div>
                <button className={styles.delete} onClick={()=>{handleDelete(el._id)}}>Delete</button>
            </div>
        </div>
    )
}

export default Card;