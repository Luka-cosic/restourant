import styles from "./css/seeAll.module.css";
import { useState, useRef, useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { getUser } from "../../Login/JS/login";
import { likeMeal } from "../../../api/index";
import { commentMeal } from "../../../api/index";
import { useNavigate } from "react-router-dom";


const SeeAll = ({ readMoreCard, setReadMoreCard, setReadMore, setAllMeals, allMeals }) => {
    const user = getUser()?.result;
          
    const navigate = useNavigate();
    const commentsRef = useRef(null);
    const containerRef = useRef(null);
    // let newPrice = Number(readMoreCard.price)
    let [price, setPrice] = useState(Number(readMoreCard.price));
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(readMoreCard.comments);

    
    const handleLike = async () => {
        if (user) {
            const { data } = await likeMeal(readMoreCard._id, user);
            setReadMoreCard(data);
            const likedMeal = allMeals.map(el => el._id === data._id ? data : el);
            setAllMeals(likedMeal);

        }
    };

    const handleComment = async (e) => {
        if (!user) { return alert("You Have To Login First!") }
        if (e.keyCode === 13) {
            let finalComment = `${user.firstName + " " + user.lastName}: ${comment.trim()}`;
            setComment("");
            const { data } = await commentMeal(readMoreCard._id, finalComment);
            setComments(data.comments);
            setReadMoreCard({ ...readMoreCard, comments: data.comments });
        }
    }

    let allComments = comments.map((el, i) => {
        return (
            <div key={i} ref={commentsRef}>
                <span className={styles.name}>{el.split(":")[0]}:</span>
                <span className={styles.com}>{el.split(":")[1]}</span>
            </div>)
    });

    useEffect(() => {
        commentsRef?.current?.scrollIntoView({ behavior: "smooth" });
        containerRef.current.style.transform = "translateZ(0)"

    }, [comments]);
    return (
        <div className={styles.wrapper}>
            <div className={styles.container} ref={containerRef}>
                <div className={styles.close} onClick={() => { setReadMore(false) }} >
                    <div className={styles.line_1}></div>
                    <div className={styles.line_2}></div>
                </div>
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
                            <div className={styles.like}>{readMoreCard.likes.length} <span onClick={handleLike}>
                                {readMoreCard.likes.findIndex((el) => { return el === user?._id }) === -1 ? <BiHeart className={styles.heart} /> : <AiFillHeart className={styles.heart} />}

                            </span> </div>
                            <div className={styles.endTime}><AiOutlineLeftCircle /><span>{readMoreCard.prepTime}min</span></div>
                        </div>
                    </div>

                    {/* Second Row */}

                    <div className={styles.secondRow}>
                        <input type="text" className={styles.input} onKeyDown={handleComment} onChange={(e) => { setComment(e.target.value) }} value={comment} placeholder="Comment Meal" />
                        <div className={styles.messages}>{allComments}</div>
                        <div className={styles.priceOffer}>
                            <div className={styles.price}>{price}<span>$</span> </div>
                            {/* <div className={styles.priceWrapp}>
                                
                                <div className={styles.plusMinus}>
                                    <div className={styles.plus} onClick={handlePlus}>+</div>
                                    <div className={styles.incDec}>{count}</div>
                                    <div className={styles.minus} onClick={handleMinus}>-</div>
                                </div>
                            </div> */}
                            <button className={styles.orderBtn} onClick={() => { navigate("/order") }}>Add To Card</button>
                        </div>


                    </div>
                    {/* Third Row */}
                    <div className={styles.thirdRow}>
                        <div className={styles.title}>{readMoreCard.title}</div>
                        <p className={styles.recipe}>{readMoreCard.recipe}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SeeAll;