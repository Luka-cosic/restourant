

export const gsapAnimate = ( rightSide)=>{
    const addClass = (e)=>{
        
        if(e.target.documentElement.scrollTop > window.innerHeight * 3.5){
            
            rightSide.current.classList.add("sec5Change");
        }
         
       }
    
       window.addEventListener("scroll", addClass);
    
}