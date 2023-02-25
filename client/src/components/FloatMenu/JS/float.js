import "../css/float.css";
let headMenu = document.getElementsByClassName("headMenu");

export const handleHover1 = (e, cont) => {
    
    Array.from(headMenu).forEach((el)=>{ 
        if(el !== e.target){
            el.classList.add("makeOpacity")
        }else{
            el.classList.remove("makeOpacity")
        }
        
    });
    
    let id = e.currentTarget.getAttribute("id");
    cont.current.style.background = `linear-gradient(rgba(15, 15, 15, 0.6), rgba(29,29,29, 0.9)),
        url("../../../images/${id}.jpg") no-repeat center`;
    cont.current.style.backgroundSize = "cover";
}

export const handleMouseOut1 = (cont) => {
    Array.from(headMenu).forEach((el)=>{ 
        el.classList.remove("makeOpacity")
    });
    cont.current.style.background = `linear-gradient(rgba(15, 15, 15, 0.6), rgba(29,29,29, 0.9)),
        url("../../../images/backgrounds/float.jpg") center`
}


