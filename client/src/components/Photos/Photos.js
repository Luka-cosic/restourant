import styles from "./css/photos.module.css";
import { useRef, useState  } from "react";
import Module from "./Module/Module.js";

const Photos = ({closeChange})=>{
    closeChange?.remove("change");
    
    const [moduleX, setModuleX] = useState(false);
    const itemRef = useRef(null);
    const [ img, setImg ] = useState();

    const openModule = (e)=>{
        // moduleRef.current.style.display = "block";
        setModuleX(true);
        console.log(e.target.getAttribute("src"));
        setImg(e.target.getAttribute("src"))
    }
    
    return(
        <div className={styles.container}>
            { moduleX && <Module setModuleX={setModuleX} img={img} /> }
            <div className={styles.imgHolder}>
                <div className={styles.item1} onClick={ openModule } ref={itemRef}>
                    <img className={styles.img} src="/images/photos/slika1.jpg" alt="" />
                </div>
                <div className={styles.item2} onClick={ openModule } ref={itemRef}>
                    <img className={styles.img} src="/images/photos/slika2.jpg" alt="" />
                </div>
                <div className={styles.item3}>
                    <img className={styles.img} src="/images/photos/slika3.jpg" alt="" />
                </div>
                <div className={styles.item4}>
                    <img className={styles.img} src="/images/photos/slika4.jpg" alt="" />
                </div>
                <div className={styles.item5}>
                    <img className={styles.img} src="/images/photos/slika5.jpg" alt="" />
                </div>
                <div className={styles.item6}>
                    <img className={styles.img} src="/images/photos/slika6.jpg" alt="" />
                </div>
                <div className={styles.item7}>
                    <img className={styles.img} src="/images/photos/slika7.jpg" alt="" />
                </div>
                <div className={styles.item8}>
                    <img className={styles.img} src="/images/photos/slika8.jpg" alt="" />
                </div>
                <div className={styles.item9}>
                    <img className={styles.img} src="/images/photos/slika9.jpg" alt="" />
                </div>
                <div className={styles.item10}>
                    <img className={styles.img} src="/images/photos/slika10.jpg" alt="" />
                </div>
                <div className={styles.item11}>
                    <img className={styles.img} src="/images/photos/slika11.jpg" alt="" />
                </div>
                <div className={styles.item12}>
                    <img className={styles.img} src="/images/photos/slika12.jpg" alt="" />
                </div>
                <div className={styles.item13}>
                    <img className={styles.img} src="/images/photos/slika13.jpg" alt="" />
                </div>
                <div className={styles.item14}>
                    <img className={styles.img} src="/images/photos/slika14.jpg" alt="" />
                </div>
                <div className={styles.item15}>
                    <img className={styles.img} src="/images/photos/slika15.jpg" alt="" />
                </div>
                <div className={styles.item16}>
                    <img className={styles.img} src="/images/photos/slika16.jpg" alt="" />
                </div>
                <div className={styles.item17}>
                    <img className={styles.img} src="/images/photos/slika17.jpg" alt="" />
                </div>
                <div className={styles.item18}>
                    <img className={styles.img} src="/images/photos/slika18.jpg" alt="" />
                </div>
                <div className={styles.item19}>
                    <img className={styles.img} src="/images/photos/slika19.jpg" alt="" />
                </div>
                <div className={styles.item20}>
                    <img className={styles.img} src="/images/photos/slika20.jpg" alt="" />
                </div>
                <div className={styles.item21}>
                    <img className={styles.img} src="/images/photos/slika21.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Photos;