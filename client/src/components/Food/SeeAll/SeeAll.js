import styles from "./css/seeAll.module.css";
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineLeftCircle } from "react-icons/ai";
import img from "./images/cover1.webp";
import { getUser } from "../../Login/JS/login";

const SeeAll = ({ readMoreCard }) => {
    const user = getUser()?.result;

    console.log(readMoreCard);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.firstRow}>
                    <div className={styles.imgWrapp}>
                        <img src={readMoreCard.img} className={styles.img} alt="" />
                    </div>
                    <div className={styles.timeHolder}>
                        <div className={styles.date}>
                            <div className={styles.day}>{readMoreCard.createdAt.split(" ")[2]}</div>
                            <div className={styles.month}>{readMoreCard.createdAt.split(" ")[1]}</div>
                        </div>
                        <div className={styles.like}>{readMoreCard.likes.length} <BiHeart className={styles.heart} /></div>
                        <div className={styles.endTime}><AiOutlineLeftCircle /></div>
                    </div>
                </div>
                <div className={styles.secondRow}>
                    <input type="text" className={styles.input} placeholder="Comment Meal" />
                    <div className={styles.messages}></div>
                </div>
                <div className={styles.thirdRow}>
                    <div className={styles.title}>{readMoreCard.title}</div>
                    <div className={styles.recipe}>{readMoreCard.recipe}</div>
                </div>

            </div>
        </div>
    )
}

export default SeeAll;