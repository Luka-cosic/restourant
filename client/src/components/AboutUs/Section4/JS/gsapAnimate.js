
export const gsapAnimate = (leftSide)=>{
   
   const addClass = (e)=>{
    if(e.target.documentElement.scrollTop > window.innerHeight * 2){
        leftSide.current.classList.add("sec2Change");  
    }
     
   }

   window.addEventListener("scroll", addClass);

}