import styles from './css/card.module.css';
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { likeMeal, deleteMeal } from "../../../api/index";
import { getUser } from "../../Login/JS/login";
import { GrCart } from "react-icons/gr";


const Card = ({ el, setAllMeals, setIsEdit, setIsVisible, setCurrentId, allMeals, setReadMoreCard }) => {
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
            const likedMeal = allMeals.map(el => el._id === data._id ? data : el)
            setAllMeals(likedMeal)
        }

    }
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapp}>
                <img src={el.img} className={styles.img} alt="pasta" />
            </div>
            <div className={styles.time}>
                <div className={styles.day}>{el.createdAt.split(" ")[2]}</div>
                <div className={styles.month}>{el.createdAt.split(" ")[1]}</div>
            </div>
            <div className={styles.iconWrapp} onClick={handleLike} title={!user ? 'You must log in first' : null}>
                <div className={styles.likes}>
                    <span className={styles.number}>{el.likes.length}</span>
                    <span className={styles.hart}>{el.likes.filter(el => el === user?._id).length === 0 ? <BiHeart className={styles.icon} /> :
                        <AiFillHeart className={styles.icon} />}</span>
                </div>
            </div>
            <div className={styles.userPart}>
                <textarea className={styles.textarea} name=""></textarea>
                <div className={styles.comOrdBtn}>
                    <button className={styles.commentsBtn}>Comments</button>
                    <button className={styles.orderBtn}>Order <GrCart /> <span className={styles.price}>{el.price}$</span> </button>
                </div>

            </div>
            <div className={styles.titleWrapp}>
                <h4 className={styles.title}>{el.title}</h4>
                <div className={styles.line}></div>
                <p className={styles.recipe}>{el.recipe.substr(0, 150)}...</p>
                <button className={styles.seeBtn} onClick={()=>{setReadMoreCard(el)}}>See all</button>

            </div>
            {user?.admin &&
                <div className={styles.btnsWrapp}>
                    <button className={styles.delBtn} onClick={handleDelete}>Delete</button>
                    <button className={styles.editBtn} onClick={handleEdit}>Edit</button>
                </div>
            }
        </div>
    )
}


export default Card;