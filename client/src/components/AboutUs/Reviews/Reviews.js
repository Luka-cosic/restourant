import styles from "./css/rev.module.css";
import { useRef } from "react";
const Reviews = () => {

    const wrapRef = useRef(null);
    
    const changeReview = (e) => {
        wrapRef.current.style.left = `${e.target.getAttribute("data") * (-90)}rem`;
  
    }
    return (
        <div className={styles.section_10}>
            <h1 className={styles.section_10_header}>REVIEWS</h1>
            <div className={styles.section_10_move}>
                <div className={styles.move_card_wrapper} ref={wrapRef}>

                    <div className={styles.move_card}>
                        <h3 className={styles.move_header}>REVIEW BY GOOGLE</h3>
                        <div className={styles.stars}>
                            <div className={styles.person}>
                                <p className={styles.star_person}>Lamar Parker:</p>
                            </div>
                            <div className={styles.star_wrapper}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className={styles.section_10_text_holder}>
                            <i className="fa-solid fa-quote-left quote"></i>
                            <p className={styles.sec_10_describe}>Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i className="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>

                    <div className={styles.move_card}>
                        <h3 className={styles.move_header}>DRUGA</h3>
                        <div className={styles.stars}>
                            <div className={styles.person}>
                                <p className={styles.star_person}>Lamar Parker:</p>
                            </div>
                            <div className={styles.star_wrapper}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className={styles.section_10_text_holder}>
                            <i className="fa-solid fa-quote-left quote"></i>
                            <p className={styles.sec_10_describe}>Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i className="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>

                    <div className={styles.move_card}>
                        <h3 className={styles.move_header}>TRECA</h3>
                        <div className={styles.stars}>
                            <div className={styles.person}>
                                <p className={styles.star_person}>Lamar Parker:</p>
                            </div>
                            <div className={styles.star_wrapper}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className={styles.section_10_text_holder}>
                            <i className="fa-solid fa-quote-left quote"></i>
                            <p className={styles.sec_10_describe}>Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i className="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>

                    <div className={styles.move_card}>
                        <h3 className={styles.move_header}>CETVRTA</h3>
                        <div className={styles.stars}>
                            <div className={styles.person}>
                                <p className={styles.star_person}>Lamar Parker:</p>
                            </div>
                            <div className={styles.star_wrapper}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className={styles.section_10_text_holder}>
                            <i className="fa-solid fa-quote-left quote"></i>
                            <p className={styles.sec_10_describe}>Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i className="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>

                    <div className={styles.move_card}>
                        <h3 className={styles.move_header}>PETA</h3>
                        <div className={styles.stars}>
                            <div className={styles.person}>
                                <p className={styles.star_person}>Lamar Parker:</p>
                            </div>
                            <div className={styles.star_wrapper}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className={styles.section_10_text_holder}>
                            <i className="fa-solid fa-quote-left quote"></i>
                            <p className={styles.sec_10_describe}>Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i className="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.circle_wrapper}>
                <div className={`${styles.circlee} circle_2`} data="0" onClick={(e) => { changeReview(e) }}></div>
                <div className={`${styles.circlee} circle_2`} data="1" onClick={(e) => { changeReview(e) }}></div>
                <div className={`${styles.circlee} circle_3`} data="2" onClick={(e) => { changeReview(e) }}></div>
                <div className={`${styles.circlee} circle_4`} data="3" onClick={(e) => { changeReview(e) }}></div>
                <div className={`${styles.circlee} circle_5`} data="4" onClick={(e) => { changeReview(e) }}></div>
            </div>
        </div>
    )
}

export default Reviews;