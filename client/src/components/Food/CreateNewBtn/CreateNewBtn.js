import styles from './css/creatNew.module.css';

const createNewBtn = ({ setIsVisible }) => {
    return (
        <div className={styles.createNewBtn} onClick={() => { setIsVisible(true) }}>
            <p className={styles.text}>Create New</p>
        </div>
    )
}

export default createNewBtn;