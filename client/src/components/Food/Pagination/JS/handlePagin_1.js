

export const handlePagin_1 = (bool, leftArr, copyAllMeals,pagWrap,rightArr,setAllMeals,changeStyle)=>{
    let activePag = document.querySelectorAll(".activePag")[0];
        if (bool) {
            const limit = (Number(activePag.innerText) + 1) * 4;
            const startIndex = activePag.innerText * 4;
            leftArr.current.style.display = "block";
            let rez = copyAllMeals.slice(startIndex, limit);
            if (pagWrap.current.lastChild.previousElementSibling === activePag) {
                rightArr.current.style.display = "none";
            }
            setAllMeals(rez);
        } else {
            rightArr.current.style.display = "block";
            if (pagWrap.current.firstChild === activePag.previousElementSibling) {
                leftArr.current.style.display = "none";
            }
            const limit = (Number(activePag.previousElementSibling.innerText)) * 4;
            const startIndex = (Number(activePag.previousElementSibling.innerText) - 1) * 4;
            let rez = copyAllMeals.slice(startIndex, limit);
            setAllMeals(rez);
        }
    
        changeStyle(!bool);
}

