import styles from './css/card.module.css';
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { likeMeal, deleteMeal, cart } from "../../../api/index";
import { getUser, saveUser } from "../../Login/JS/login";
import { GrCart } from "react-icons/gr";
import Comments from "./Comments/Comments";
import { useState, useRef, useEffect } from 'react';
import { commentMeal } from "../../../api/index";


const Card = ({ el, setAllMeals, setIsEdit, setIsVisible, setCurrentId, allMeals,
     setReadMoreCard,readMoreCard,setReadMore,setAddToCart,count,setCount }) => {
    const user = getUser()?.result;

    // setReadMoreCard(el);
    
    const commRef = useRef(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(el.comments);
   
    const [comments_X, setComments_X] = useState(true);
    
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
        }else{
            alert("You Have To Login First")
        }
    }

        const handleComment = async (e)=>{
            if(!user) {return alert("You Have To Login First!")}
            if(e.keyCode === 13){
                let finalComment = `${user.firstName+" "+user.lastName}: ${comment.trim()}`;
                setComment("");
                const { data } = await commentMeal(el._id, finalComment );
                setComments(data.comments);  
            }  
        }
        const handleFocus = (e) => {
            setComments_X(!comments_X);
            e.target.offsetParent.offsetParent.lastChild.style.display = 'block';  
        }
        const handleBlur = (e) => {
            // setComments_X(!comments_X);
            e.target.offsetParent.offsetParent.lastChild.style.display = 'none';
        }
        const handleComm = (e) => {
            setComments_X(!comments_X);
            comments_X? commRef.current.style.display = 'block' : commRef.current.style.display = 'none';  
        }
        const addToCart = async ()=>{
           
            if(!user) alert("You Have To Login First");
            // let time = new Date()
            // console.log(time);
            const { data } = await cart({ user: user._id, title: el.title, mealId: el._id, img: el.img, col: count, price:el.price });
    
            let radi = getUser()
            radi.result = data;
            saveUser(radi)

            setAddToCart(data.cart);   
        }

        const handleSeeAll = () => {
            setReadMoreCard(el); 
            setReadMore(true);  
        }
        // useEffect(()=>{
        //     setComments([...el.comments])
        // },[readMoreCard])
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapp} onClick={handleSeeAll}>
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
                <textarea className={styles.textarea} onChange={(e)=>{setComment(e.target.value)
                }} onKeyDown={handleComment} value={comment} onFocus={handleFocus} onBlur={handleBlur} ></textarea>
                <div className={styles.comOrdBtn}>
                    <button className={styles.commentsBtn} onClick={handleComm}>Comments</button>
                    <button className={styles.orderBtn} onClick={addToCart}>Add To <GrCart /> <span className={styles.price}>{el.price}$</span> </button>
                </div>

            </div>
            <div className={styles.titleWrapp}>
                <h4 className={styles.title}>{el.title}</h4>
                <div className={styles.line}></div>
                <p className={styles.recipe}>{el.recipe.substr(0, 130)}...</p>
                <button className={styles.seeBtn} onClick={handleSeeAll}>See all</button>

            </div>
            {user?.admin &&
                <div className={styles.btnsWrapp}>
                    <button className={styles.delBtn} onClick={handleDelete}>Delete</button>
                    <button className={styles.editBtn} onClick={handleEdit}>Edit</button>
                </div>
            }
            <div ref={commRef} className={styles.commWrapp}>
                <Comments el={el} comments={comments} setComments={setComments} />
            </div>
           
        </div>
    )
}


export default Card;