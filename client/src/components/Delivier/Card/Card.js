import styles from "./css/card.module.css";
import { deleteOrderedCard } from "../../../api/index";

const Card = ({el})=>{
     
    console.log(el);
    
    const allOrdered = el.forOrder.map((meal,i)=>{
        
        return(
            <div className={styles.meal} key={i}>{meal.title}; col: {meal.col}; {meal.price} din</div>
        )
    })
    
    const handleDelete = (id)=>{
        deleteOrderedCard(id)
    }
    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.name}>{el.name}</div>
                <div className={styles.phone}>{el.phone}</div>
            </div>
            <div className={styles.body}>
                {allOrdered}
            </div>
            <div className={styles.footer}>
                <div className={styles.total}>{el.total} din</div>
                <button className={styles.delete} onClick={()=>{handleDelete(el._id)}}>Delete</button>
            </div>
        </div>
    )
}

export default Card;