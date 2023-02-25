import styles from './css/card.module.css';
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { likeMeal, deleteMeal } from "../../../api/index";
import { getUser } from "../../Login/JS/login";
const Card = ({ el, setAllMeals, setIsEdit, setIsVisible, setCurrentId, allMeals }) => {
    const user = getUser()?.result;

    const handleDelete = async () => {
        let del = (await deleteMeal(el._id)).data.allMeals;
        setAllMeals(del);
    }
    const handleEdit = () => {
        setIsEdit(true);
        setIsVisible(true);
        setCurrentId(el._id)
    }
    const handleLike = async () => {

        if (user) {
            const { data } = await likeMeal(el._id, user);
            const likedMeal = allMeals.map( el =>  el._id === data._id ? data : el )

            setAllMeals(likedMeal)
        }

    }
    return (
        <div className={styles.meal}>
            <div className={styles.imgWrapp}>
                <img src={el.img} className={styles.img} alt="pasta" />
            </div>
            <div className={styles.time}>
                {el.createdAt}
            </div>
            <div className={styles.titleWrapp}>
                <p className={styles.title}>{el.title}</p>
                <div className={styles.iconWrapp} onClick={handleLike} title={!user ? 'You must log in first' : null}>
                    <span className={styles.number}>{el.likes.length}</span>{
                        el.likes.filter(el => el === user?._id).length === 0 ? <BiHeart className={styles.icon} /> :
                            <AiFillHeart className={styles.icon} />
                    }
                </div>
            </div>
            {user?.admin &&
                <div className={styles.btnsWrapp}>
                    <button className={styles.delBtn} onClick={handleDelete}>Delete</button>
                    <button className={styles.editBtn} onClick={handleEdit}>Edit</button>
                </div>}

        </div>
    )
}


export default Card;