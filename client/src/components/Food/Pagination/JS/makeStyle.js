export const pagBtnsStyle = (prop)=>{
    let pagBtns = document.querySelectorAll(".pagBtn");
        let activePag = document.querySelectorAll(".activePag")[0];
       
        Array.from(pagBtns).forEach((el) => {
            el.classList.remove("activePag");
        });
       
       
        if(prop){
            activePag.previousElementSibling.classList.add("activePag");
        }else{
            activePag.nextElementSibling.classList.add("activePag");
        }
}