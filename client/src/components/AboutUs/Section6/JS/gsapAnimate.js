

export const gsapAnimate = (leftSide)=>{
    const addClass = (e)=>{
        
        if(e.target.documentElement.scrollTop > window.innerHeight * 4){
            
            leftSide.current.classList.add("sec6Change");
        }
         
       }
    
       window.addEventListener("scroll", addClass);
}