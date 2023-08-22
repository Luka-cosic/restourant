export const pagBtnsStyle = (prop)=>{
    let pagBtns = document.querySelectorAll(".pagBtn");
        let activePag = document.querySelectorAll(".activePag")[0];
       
        Array.from(pagBtns).forEach((el) => {
            el.classList.remove("activePag");
        });
       
        if (activePag.nextElementSibling === null && !prop) {
            return pagBtns[0].classList.add("activePag");
        }
        
        if (activePag.previousElementSibling === null && prop ) {
            return pagBtns[pagBtns.length -1].classList.add("activePag");
        }
        if(prop){
            activePag.previousElementSibling.classList.add("activePag");
        }else{
            activePag.nextElementSibling.classList.add("activePag");
        }
}