import styles from "./css/footer.module.css";
import { ImPlay, ImFacebook2, ImTwitter, ImInstagram } from "react-icons/im";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <h2 className={styles.heading}>CONTACT</h2>
                <div className={styles.information}>
                    <div className={styles.mailTel}>
                        <p>info@bugatti-rimac.com</p>
                        <p>tel: +385 1 563 45 92</p>
                    </div>
                    <div className={styles.adress}>
                        <p>© 2023 Bugatti Rimac d.o.o.</p>
                        <p>Ljubljanska ulica 7, Brezje</p>
                        <p>10431 Sveta Nedelja, Croatia</p>
                    </div>
                </div>
            </div>
            <div className={styles.findUs}>
                <h2 className={styles.heading}>FIND US ON</h2>
                <a href="https://www.youtube.com/" ><ImPlay className={styles.icons} /></a>
                <a href="https://www.facebook.com/" ><ImFacebook2 className={styles.icons} /></a>
                <a href="https://www.youtube.com/" ><ImTwitter className={styles.icons} /></a>
                <a href="https://www.youtube.com/"  ><ImInstagram className={styles.icons} /></a>
            </div>
            <div className={styles.policies}>
                <h2 className={styles.heading}>POLICIES</h2>
                <p>Privacy Policy Legal Notice Cookie Policy</p>
                <p>Code of Conduct Whistleblowing System</p>

            </div>
        </div>
    )
}

export default Footer;