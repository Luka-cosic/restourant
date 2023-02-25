import styles from './css/aboutUs.module.css';

const Section1 = ()=>{
    return(
        <>
        <div className={styles.section_1}>
            <div className={styles.sec_1_heading}>MAKING THE FUTURE EXCITING</div>
                <div className={styles.videoWrapper}>
                
                    <div className={styles.video}>
                        <video autoPlay muted >
                            <source src="../../../videos/aboutUs.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1;