import styles from "./css/photos.module.css";
import { useRef, useState  } from "react";
import Module from "./Module/Module.js";

const Photos = ({closeChange})=>{
    closeChange?.remove("change");
    
    const [moduleX, setModuleX] = useState(false);
    const [ getSrc, setGetSrc ] = useState(1);

    const openModule = (e)=>{
        setModuleX(true);
        setGetSrc(e.target.getAttribute("src").split("")[20])
    }
    
    return(
        <div className={styles.container}>
            { moduleX && <Module setModuleX={setModuleX} getSrc={getSrc} setGetSrc={setGetSrc} /> }
            <div className={styles.imgHolder}>
                <div className={styles.item1} onClick={ openModule } >
                    <img className={styles.img} src="/images/photos/slika1.jpg" alt="" />
                </div>
                <div className={styles.item2} onClick={ openModule } >
                    <img className={styles.img} src="/images/photos/slika2.jpg" alt="" />
                </div>
                <div className={styles.item3} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika3.jpg" alt="" />
                </div>
                <div className={styles.item4} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika4.jpg" alt="" />
                </div>
                <div className={styles.item5} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika5.jpg" alt="" />
                </div>
                <div className={styles.item6} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika6.jpg" alt="" />
                </div>
                <div className={styles.item7} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika7.jpg" alt="" />
                </div>
                <div className={styles.item8} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika8.jpg" alt="" />
                </div>
                <div className={styles.item9} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika9.jpg" alt="" />
                </div>
                <div className={styles.item10} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika10.jpg" alt="" />
                </div>
                <div className={styles.item11} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika11.jpg" alt="" />
                </div>
                <div className={styles.item12} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika12.jpg" alt="" />
                </div>
                <div className={styles.item13} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika13.jpg" alt="" />
                </div>
                <div className={styles.item14} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika14.jpg" alt="" />
                </div>
                <div className={styles.item15} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika15.jpg" alt="" />
                </div>
                <div className={styles.item16} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika16.jpg" alt="" />
                </div>
                <div className={styles.item17} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika17.jpg" alt="" />
                </div>
                <div className={styles.item18} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika18.jpg" alt="" />
                </div>
                <div className={styles.item19} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika19.jpg" alt="" />
                </div>
                <div className={styles.item20} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika20.jpg" alt="" />
                </div>
                <div className={styles.item21} onClick={ openModule }>
                    <img className={styles.img} src="/images/photos/slika21.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Photos;