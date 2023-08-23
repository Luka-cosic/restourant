import styles from './css/book.module.css'
import img1 from "./images/osnova3.png";
import img2 from "./images/osnova4.png";
import { useRef } from "react";

const Book = ({ closeChange }) => {

    closeChange?.remove("change");
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);

    const changePicture = (bool) => {

        if (bool) {
            img1Ref.current.style.display = "block";
            img2Ref.current.style.display = "none";
        } else {
            img1Ref.current.style.display = "none";
            img2Ref.current.style.display = "block";
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <h1 className={styles.heading}>Please fill in the reservation form</h1>
                <form className={styles.form}>
                    <div className={styles.col1}>
                        <div className={styles.row1}>
                            <input className={styles.inpHalf} type="text" placeholder="Reservation date" />
                            <input className={styles.inpHalf} type="text" placeholder="Time (HH:MM)" />
                        </div>
                        <input className={styles.input} type="text" placeholder="Booked tables" />
                        <input className={styles.input} type="text" placeholder="Nr. of persons" />

                    </div>
                    <div className={styles.col1}>
                        <input className={styles.input} type="text" placeholder="Name" />
                        <input className={styles.input} type="text" placeholder="Phone" />
                        <input className={styles.input} type="text" placeholder="Email" />

                    </div>
                    <div className={styles.col1}>
                        <textarea className={styles.textarea} placeholder="Comment" cols="30" rows="10"></textarea>
                    </div>
                </form>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgHolder}>
                        <img className={styles.img1} src={img2} ref={img1Ref} alt="" />
                        <img className={styles.img2} src={img1} ref={img2Ref} alt="" />
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <button className={styles.baseBtn2} onClick={() => { changePicture(false) }}>Entrance</button>
                    <button className={styles.baseBtn1} onClick={() => { changePicture(true) }} >Ground Floor</button>
                </div>
            </div>
        </div>
    )
}

export default Book;