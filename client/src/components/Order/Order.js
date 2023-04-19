import styles from "./css/order.module.css";

const Order = ({closeChange})=>{
    closeChange?.remove("change");
    return(
        <div className={styles.container}></div>
    )
}

export default Order;