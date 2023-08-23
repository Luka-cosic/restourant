
export const makePages_1 = (pagin, arr, styles)=>{
    const p = Math.ceil(pagin / 4);
         for (let i = 0; i < p; i++) {
             arr.push(<div className={`${styles.pagBtn} pagBtn ${i === 0 ? "activePag" : ""}`} key={i} >{i + 1}</div>)
         }
}