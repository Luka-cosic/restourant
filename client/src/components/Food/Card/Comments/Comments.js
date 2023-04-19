import styles from "./css/comments.module.css";
import { useRef, useEffect } from "react";


const Comments = ({el, comments, setComments })=>{

    const commentsRef = useRef(null);
   
    let allComments = comments.map((el, i)=>{
        return (
        <div key={i} ref={commentsRef}>
            <span className={styles.name}>{el.split(":")[0]}:</span>
            <span className={styles.com}>{el.split(":")[1]}</span>
        </div> )
    })
  
    useEffect(()=>{
        commentsRef?.current?.scrollIntoView({ behavior: "smooth"});
        // setComments(el.comments)
    },[comments]);

    return(
        <div className={styles.container}>
            <div className={styles.close} >
                <div className={styles.line_1}></div>
                <div className={styles.line_2}></div>
            </div>
            <div className={styles.headingWrapp}>
                <h4 className={styles.heading}>Comments</h4>
            </div>
            <div className={styles.comments} >{allComments}</div>
        </div>
    )
}


export default Comments;