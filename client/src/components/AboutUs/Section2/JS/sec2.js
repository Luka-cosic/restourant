 export const addClass = (e, sec2Ref)=>{
        console.log(window.innerWidth);
        
        if(e.target.documentElement.scrollTop > window.innerHeight / 4){
            sec2Ref.current.classList.add("sec2Change")
        }
    
}